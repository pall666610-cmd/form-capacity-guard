/**
 * @OnlyCurrentDoc
 */
const CONFIG_KEY = 'FORM_CAPACITY_GUARD_CONFIG';
const TRIGGER_FUNCTION = 'handleFormSubmit';
const LOCK_TIMEOUT_MS = 30000;

function onOpen() {
  FormApp.getUi()
    .createAddonMenu()
    .addItem('開啟名額設定', 'showSidebar')
    .addSeparator()
    .addItem('立即檢查名額', 'runManualCheck')
    .addItem('重新開啟表單', 'reopenForm')
    .addToUi();
}

function onInstall() {
  onOpen();
}

function showSidebar() {
  const html = HtmlService.createTemplateFromFile('Sidebar')
    .evaluate()
    .setTitle('Form Capacity Guard');
  FormApp.getUi().showSidebar(html);
}

function getInitialState() {
  const form = FormApp.getActiveForm();
  const config = getConfig_();
  return {
    title: form.getTitle(),
    acceptingResponses: form.isAcceptingResponses(),
    responseCount: form.getResponses().length,
    triggerInstalled: hasSubmitTrigger_(),
    config,
    choiceItems: getChoiceItems_(form)
  };
}

function saveSettings(settings) {
  return withDocumentLock_(() => {
    const form = FormApp.getActiveForm();
    const normalized = normalizeSettings_(settings, form);
    saveConfig_(normalized);
    syncSubmitTrigger_(normalized.enabled || normalized.choiceLimiter.enabled);
    enforceRules_('manual');
    return getInitialState();
  });
}

function disableGuard() {
  return withDocumentLock_(() => {
    const form = FormApp.getActiveForm();
    const config = getConfig_();
    restoreConfiguredChoices_(form, config.choiceLimiter.rules);
    config.enabled = false;
    config.choiceLimiter.enabled = false;
    config.updatedAt = new Date().toISOString();
    saveConfig_(config);
    syncSubmitTrigger_(false);
    return getInitialState();
  });
}

function runManualCheck() {
  const result = runSidebarCheck();
  FormApp.getUi().alert(result.message);
  return result;
}

function runSidebarCheck() {
  return withDocumentLock_(() => enforceRules_('manual'));
}

function reopenForm() {
  return withDocumentLock_(() => {
    const form = FormApp.getActiveForm();
    form.setAcceptingResponses(true);
    const config = getConfig_();
    restoreConfiguredChoices_(form, config.choiceLimiter.rules);
    return getInitialState();
  });
}

function handleFormSubmit(e) {
  withDocumentLock_(() => enforceRules_('submit'));
}

function enforceRules_(reason) {
  const form = FormApp.getActiveForm();
  const config = getConfig_();
  const responseCount = form.getResponses().length;
  const actions = [];

  if (config.choiceLimiter.enabled) {
    const choiceResult = enforceChoiceLimits_(form, config.choiceLimiter.rules);
    actions.push(choiceResult.message);
    if (choiceResult.allConfiguredChoicesFull && config.choiceLimiter.closeFormWhenAllFull) {
      closeForm_(form, config.choiceLimiter.fullMessage || config.closedMessage);
      actions.push('所有已設定的選項都已滿額，表單已自動關閉。');
    }
  }

  if (config.enabled && config.limit > 0 && responseCount >= config.limit) {
    if (config.autoClose) {
      closeForm_(form, config.closedMessage);
      actions.push(`目前回覆數為 ${responseCount}/${config.limit}，表單已自動關閉。`);
    } else {
      actions.push(`目前回覆數為 ${responseCount}/${config.limit}，已達上限，但自動關閉未啟用。`);
    }
  }

  if (!actions.length) {
    actions.push(`目前回覆數為 ${responseCount}，尚未觸發任何名額限制。`);
  }

  return {
    reason,
    responseCount,
    acceptingResponses: form.isAcceptingResponses(),
    message: actions.join('\n')
  };
}

function closeForm_(form, message) {
  form.setCustomClosedFormMessage(message || '此表單已達名額上限，目前不再接受回覆。');
  form.setAcceptingResponses(false);
}

function enforceChoiceLimits_(form, rules) {
  const countsByItemId = countChoices_(form);
  let configuredRules = 0;
  let fullRules = 0;
  const messages = [];

  rules.forEach(rule => {
    if (!rule.enabled || !rule.itemId || !rule.limit || rule.limit < 1 || !rule.originalChoices.length) {
      return;
    }

    const item = findItemById_(form, rule.itemId);
    if (!item) {
      messages.push(`找不到題目：${rule.title}`);
      return;
    }

    configuredRules += 1;
    const counts = countsByItemId[String(rule.itemId)] || {};
    const remaining = rule.originalChoices.filter(choice => (counts[choice] || 0) < rule.limit);
    const removedCount = rule.originalChoices.length - remaining.length;

    setChoiceValues_(item, remaining.length ? remaining : ['名額已滿']);
    if (!remaining.length) {
      fullRules += 1;
    }

    messages.push(`${rule.title}：已隱藏 ${removedCount}/${rule.originalChoices.length} 個滿額選項。`);
  });

  return {
    allConfiguredChoicesFull: configuredRules > 0 && configuredRules === fullRules,
    message: messages.length ? messages.join('\n') : '尚未啟用任何選項名額限制。'
  };
}

function restoreConfiguredChoices_(form, rules) {
  rules.forEach(rule => {
    const item = findItemById_(form, rule.itemId);
    if (item && rule.originalChoices && rule.originalChoices.length) {
      setChoiceValues_(item, rule.originalChoices);
    }
  });
}

function countChoices_(form) {
  const counts = {};
  form.getResponses().forEach(response => {
    response.getItemResponses().forEach(itemResponse => {
      const itemId = String(itemResponse.getItem().getId());
      if (!counts[itemId]) {
        counts[itemId] = {};
      }
      const answer = itemResponse.getResponse();
      const values = Array.isArray(answer) ? answer : [answer];
      values.filter(Boolean).forEach(value => {
        counts[itemId][value] = (counts[itemId][value] || 0) + 1;
      });
    });
  });
  return counts;
}

function getChoiceItems_(form) {
  return form.getItems()
    .filter(item => {
      const type = item.getType();
      return type === FormApp.ItemType.MULTIPLE_CHOICE ||
        type === FormApp.ItemType.LIST ||
        type === FormApp.ItemType.CHECKBOX;
    })
    .map(item => ({
      id: item.getId(),
      title: item.getTitle(),
      type: String(item.getType()),
      choices: getChoiceValues_(item)
    }));
}

function getChoiceValues_(item) {
  switch (item.getType()) {
    case FormApp.ItemType.MULTIPLE_CHOICE:
      return item.asMultipleChoiceItem().getChoices().map(choice => choice.getValue());
    case FormApp.ItemType.LIST:
      return item.asListItem().getChoices().map(choice => choice.getValue());
    case FormApp.ItemType.CHECKBOX:
      return item.asCheckboxItem().getChoices().map(choice => choice.getValue());
    default:
      return [];
  }
}

function setChoiceValues_(item, values) {
  switch (item.getType()) {
    case FormApp.ItemType.MULTIPLE_CHOICE:
      item.asMultipleChoiceItem().setChoiceValues(values);
      break;
    case FormApp.ItemType.LIST:
      item.asListItem().setChoiceValues(values);
      break;
    case FormApp.ItemType.CHECKBOX:
      item.asCheckboxItem().setChoiceValues(values);
      break;
  }
}

function findItemById_(form, itemId) {
  const id = Number(itemId);
  return form.getItems().find(item => item.getId() === id) || null;
}

function normalizeSettings_(settings, form) {
  const currentChoiceItems = getChoiceItems_(form);
  const existing = getConfig_();
  const selectedRules = (settings.choiceRules || []).map(rule => {
    const item = currentChoiceItems.find(choiceItem => String(choiceItem.id) === String(rule.itemId));
    const existingRule = existing.choiceLimiter.rules.find(saved => String(saved.itemId) === String(rule.itemId));
    return {
      enabled: Boolean(rule.enabled && item),
      itemId: item ? item.id : '',
      title: item ? item.title : '',
      limit: Math.max(1, parseInt(rule.limit, 10) || 1),
      originalChoices: existingRule && existingRule.originalChoices.length ? existingRule.originalChoices : (item ? item.choices : [])
    };
  });

  return {
    enabled: Boolean(settings.enabled),
    limit: Math.max(0, parseInt(settings.limit, 10) || 0),
    autoClose: Boolean(settings.autoClose),
    closedMessage: normalizeMessage_(settings.closedMessage, '此表單已達名額上限，目前不再接受回覆。'),
    choiceLimiter: {
      enabled: Boolean(settings.choiceLimiterEnabled),
      closeFormWhenAllFull: Boolean(settings.closeFormWhenAllFull),
      fullMessage: normalizeMessage_(settings.fullMessage, '所有可選名額皆已額滿，此表單目前不再接受回覆。'),
      rules: selectedRules
    },
    updatedAt: new Date().toISOString()
  };
}

function getConfig_() {
  const raw = PropertiesService.getDocumentProperties().getProperty(CONFIG_KEY);
  if (!raw) {
    return defaultConfig_();
  }
  try {
    return mergeConfig_(JSON.parse(raw));
  } catch (err) {
    return defaultConfig_();
  }
}

function saveConfig_(config) {
  PropertiesService.getDocumentProperties().setProperty(CONFIG_KEY, JSON.stringify(mergeConfig_(config)));
}

function defaultConfig_() {
  return {
    enabled: false,
    limit: 0,
    autoClose: true,
    closedMessage: '此表單已達名額上限，目前不再接受回覆。',
    choiceLimiter: {
      enabled: false,
      closeFormWhenAllFull: true,
      fullMessage: '所有可選名額皆已額滿，此表單目前不再接受回覆。',
      rules: []
    },
    updatedAt: ''
  };
}

function mergeConfig_(config) {
  const defaults = defaultConfig_();
  const source = config || {};
  const sourceChoiceLimiter = source.choiceLimiter || {};
  return {
    enabled: Boolean(source.enabled),
    limit: Math.max(0, parseInt(source.limit, 10) || 0),
    autoClose: source.autoClose === undefined ? defaults.autoClose : Boolean(source.autoClose),
    closedMessage: normalizeMessage_(source.closedMessage, defaults.closedMessage),
    choiceLimiter: {
      enabled: Boolean(sourceChoiceLimiter.enabled),
      closeFormWhenAllFull: sourceChoiceLimiter.closeFormWhenAllFull === undefined
        ? defaults.choiceLimiter.closeFormWhenAllFull
        : Boolean(sourceChoiceLimiter.closeFormWhenAllFull),
      fullMessage: normalizeMessage_(sourceChoiceLimiter.fullMessage, defaults.choiceLimiter.fullMessage),
      rules: Array.isArray(sourceChoiceLimiter.rules) ? sourceChoiceLimiter.rules : []
    },
    updatedAt: source.updatedAt || ''
  };
}

function normalizeMessage_(value, fallback) {
  const normalized = String(value || '').trim();
  return normalized || fallback;
}

function syncSubmitTrigger_(shouldExist) {
  const triggers = ScriptApp.getProjectTriggers();
  const existing = triggers.filter(trigger => trigger.getHandlerFunction() === TRIGGER_FUNCTION);

  if (!shouldExist) {
    existing.forEach(trigger => ScriptApp.deleteTrigger(trigger));
    return;
  }

  if (!existing.length) {
    ScriptApp.newTrigger(TRIGGER_FUNCTION)
      .forForm(FormApp.getActiveForm())
      .onFormSubmit()
      .create();
  }
}

function hasSubmitTrigger_() {
  return ScriptApp.getProjectTriggers()
    .some(trigger => trigger.getHandlerFunction() === TRIGGER_FUNCTION);
}

function withDocumentLock_(callback) {
  const lock = LockService.getDocumentLock();
  if (!lock.tryLock(LOCK_TIMEOUT_MS)) {
    throw new Error('Form Capacity Guard 正在處理另一個更新，請幾秒後再試一次。');
  }

  try {
    return callback();
  } finally {
    lock.releaseLock();
  }
}
