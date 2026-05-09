# Form Capacity Guard Release Workflow

## Current Phase

Phase: Marketplace readiness pass after MVP.

Current completion: 62%.

Why: the MVP code and open-source documents exist, and this phase improved trigger safety, settings migration, disable/reopen behavior, sidebar UX, Marketplace asset planning, GitHub prep, and the real Google Form test run plan. Real Google Form execution, public URLs, OAuth verification, screenshots, logo, demo video, and Marketplace review are still incomplete.

## Effective Workflow Used

1. Read core files with explicit UTF-8.
2. Inspect `Code.gs`, `Sidebar.html`, `appsscript.json`, README, test plan, and Marketplace checklists together.
3. Separate real code issues from environment display issues.
4. Patch high-risk runtime behavior first: locks, config normalization, restore behavior, trigger status.
5. Patch Marketplace-facing UX second: public English copy, visible status, inline errors.
6. Validate JavaScript syntax by reading file contents instead of relying on file extensions.
7. Record lessons in `mistakes.md` and Skill rules in `SKILLS.md`.

## Stage 1 Summary: Code And UX Review

Fixed:

- Added document locking around save, manual check, reopen, disable, and submit-trigger enforcement.
- Added stable nested config merging for saved document properties.
- Added trigger status to initial sidebar state.
- Restored saved choices when disabling the guard.
- Split menu manual check from sidebar silent check to avoid duplicate Apps Script alerts.
- Changed public UI labels to English for Marketplace consistency.
- Replaced alert-only sidebar errors with inline notices.

Root causes:

- The MVP worked for a happy path but lacked concurrent update protection.
- Settings persistence had no migration layer.
- Disable was treated as only a trigger removal action, not a full restoration action.
- Sidebar UX did not expose enough operational status for review or support.

Validation:

- JavaScript syntax check passed by reading `Code.gs` and sidebar `<script>` content into Node.

## Stage 2 Summary: Marketplace Assets

Completed:

- Added `MARKETPLACE_ASSETS.md`.
- Planned custom logo requirements.
- Planned screenshot set.
- Drafted demo video script for OAuth verification and Marketplace review.

Root cause:

- Existing listing draft named the screenshot needs, but did not define enough production rules to avoid trademark, privacy, and version mismatch problems.

## Stage 3 Summary: GitHub Repository Prep

Completed:

- Added `.gitignore`.
- Added `GITHUB_PREP.md`.
- Documented local initialization commands and public URL updates.

Root cause:

- The folder was not yet a Git repository, and public Marketplace review needs stable support, privacy, terms, and source URLs.

## Remaining Tasks

- Run the add-on in a real Google Form and complete `TEST_PLAN.md`.
- Create a custom logo and host it at a public URL.
- Capture Marketplace screenshots from the tested Apps Script version.
- Record the demo video if OAuth verification requests it.
- Initialize Git locally and create a public GitHub repository.
- Replace placeholder support/contact URLs with public URLs.
- Create and link a standard Google Cloud project.
- Configure OAuth consent screen.
- Configure Google Workspace Marketplace SDK.
- Create a versioned Apps Script deployment.
- Submit OAuth verification.
- Submit Marketplace review.

## Next Step

Run a real Google Form test pass for FCG-001 through FCG-011, then update screenshots and Marketplace copy from the tested version.

## Stage 5 Start: Guided Real Google Form Backtest

Completed locally:

- Re-read the requested project files.
- Re-ran local preflight for `Code.gs`, `Sidebar.html`, and `appsscript.json`.
- Confirmed syntax validation result: `Apps Script, sidebar JavaScript, and manifest syntax OK`.
- Updated `TEST_PLAN.md` with a current execution status and live handoff rule so real tests are not accidentally marked passed without evidence.

Current blocker:

- FCG-001 through FCG-011, Marketplace screenshots, and OAuth authorization evidence require the tester's signed-in Google browser session.

Effective workflow from here:

1. Tester creates `Form Capacity Guard Test - FCG-20260508-01`.
2. Tester pastes the current local `Code.gs`, `Sidebar.html`, and `appsscript.json` into the bound Apps Script project.
3. Tester runs FCG-001 and shares the actual result plus screenshot evidence.
4. Codex updates `TEST_PLAN.md`, diagnoses failures, and patches code or docs before moving to the next test.
5. Marketplace screenshots are captured only after the matching test step passes.

Current completion: 63%.

Why: local preflight and real-test handoff documentation are complete, but no real Google Form row or Marketplace screenshot has been verified yet.

## Stage 5 Update: FCG-001 Waiting For Actual Result

Latest handoff:

- The tester provided the FCG-001 field labels, but `Status`, `Actual result`, `Evidence`, and `Notes` were blank.
- `TEST_PLAN.md` was updated to show FCG-001 as waiting for tester result instead of ready or passed.
- No code changes were made because there is no failure symptom or root cause to diagnose yet.

Required next evidence:

- FCG-001 actual result: whether the sidebar opened and what was visible.
- FCG-001 status: Passed or Failed.
- Evidence: screenshot path/link for `screenshot-01-sidebar-overview.png`.
- Notes: authorization behavior, error message, or anything unexpected.

Access note:

- The tester provided a Google Form edit URL for the private test run. It was later redacted from public-ready files as `<redacted-test-form-edit-url>`.
- Codex could not verify the editor page directly because the form requires the tester's signed-in Google browser session, and browser automation was unavailable in this environment.
- Continue by having the tester run FCG-001 in the browser and paste the result.

Marketplace screenshot reminder:

- Capture `screenshot-01-sidebar-overview.png` only after the sidebar successfully loads in the real Google Form.

Current completion: 63%.

Why: the real test is still blocked on tester-side Google Forms evidence; no verified functional row has been completed yet.

## Stage 5 Update: FCG-001 Setup Blocker

Observed result:

- The tester opened the Google Forms add-ons menu.
- The menu showed `LIMIT IT: FormLimiter & QR Code Generator`, but did not show `Form Capacity Guard`.
- FCG-001 cannot test sidebar behavior until the local project files are installed into the form's bound Apps Script project and the form editor is refreshed.

Root cause:

- This is a setup blocker, not yet an add-on runtime failure.
- The likely cause is that `Code.gs`, `Sidebar.html`, and `appsscript.json` have not been pasted/saved into the bound Apps Script project for the provided form.

Next action:

1. Open More > Script editor from the Google Form.
2. Paste the current local `Code.gs`, `Sidebar.html`, and `appsscript.json`.
3. Save the Apps Script project.
4. Refresh the Google Form editor.
5. Open the add-on menu again and look for `Form Capacity Guard`.

Marketplace screenshot reminder:

- Do not capture `screenshot-01-sidebar-overview.png` until the real Form Capacity Guard sidebar is visible.

Current completion: 63%.

Why: the real test has started, but FCG-001 is blocked by setup before functional behavior can be verified.

## Stage 5 Update: FCG-001 Passed And UI Language Changed

Observed result:

- The tester completed authorization.
- The tester reported that the right sidebar displays `Form Capacity Guard`.
- FCG-001 is recorded as passed based on tester report, but the Marketplace evidence screenshot still needs to be captured after the Traditional Chinese UI update is pasted into Apps Script.

Product language decision:

- The user requested Traditional Chinese for the working add-on UI.
- Local `Code.gs` menu labels and backend messages were translated to Traditional Chinese.
- Local `Sidebar.html` labels, notices, buttons, status text, and placeholders were translated to Traditional Chinese.

Important next step:

- Paste the updated local `Code.gs` and `Sidebar.html` into the bound Apps Script project, save, refresh the Google Form editor, and reopen the sidebar before capturing `screenshot-01-sidebar-overview.png`.

Marketplace screenshot reminder:

- Capture `screenshot-01-sidebar-overview.png` only after the sidebar shows the Traditional Chinese UI.

Current completion: 64%.

Why: FCG-001 is functionally passed by tester report, and a product language decision was implemented locally. Evidence screenshot and FCG-002 are still pending.

## Stage 5 Code Check: Traditional Chinese `Code.gs`

Completed:

- Checked `Code.gs` syntax with Node content parsing: passed.
- Verified user-facing menu labels are Traditional Chinese:
  - `開啟名額設定`
  - `立即檢查名額`
  - `重新開啟表單`
- Verified backend messages and default closed-form messages are Traditional Chinese.
- Verified apparent mojibake from PowerShell is a terminal display issue, not file corruption, by reading the file as UTF-8 through Node.

Decision:

- Keep `Form Capacity Guard` as the product/brand name.
- Keep settings labels, buttons, notices, alerts, and respondent-facing messages in Traditional Chinese.

Current completion: 64%.

Why: Code syntax and language checks passed locally. The updated files still need to be pasted back into Apps Script before continuing FCG-002.

## Stage 5 Update: FCG-001 Evidence Received

Observed result:

- The tester provided a sidebar screenshot for `screenshot-01-sidebar-overview.png`.
- The screenshot shows `Form Capacity Guard` opened in the Google Forms sidebar.
- Visible status includes response count `0`, form status `已關閉`, submit trigger `已安裝`, and total response limit controls.

Result:

- FCG-001 is passed.
- `TEST_PLAN.md` was updated with the actual result, status, evidence filename, and notes.
- `MARKETPLACE_ASSETS.md` was updated to show that screenshot 01 has been provided in chat.

File note:

- Codex can view the uploaded chat image, but this environment did not expose a local image file path for direct saving.
- Before final packaging, save the screenshot into the project assets folder as `screenshot-01-sidebar-overview.png`.

Next test:

- Continue to FCG-002: Save total response limit.
- Marketplace screenshot reminder: capture `screenshot-02-total-limit-settings.png` after saving the intended total response limit settings.

Current completion: 65%.

Why: the first real functional test now has visible evidence, but the image still needs to be stored as a local asset and FCG-002 through FCG-011 remain incomplete.

## Stage 5 Update: FCG-002 Passed

Observed result:

- The tester completed FCG-002 and saved the screenshot in the project folder.
- The screenshot shows the total response limit enabled, maximum responses set to `3`, auto-close enabled, saved notice visible, and submit trigger installed.
- The screenshot was originally named `screenshot-02-sidebar-overview.png`; it was renamed to `screenshot-02-total-limit-settings.png` to match `MARKETPLACE_ASSETS.md`.

Result:

- FCG-002 is passed.
- `TEST_PLAN.md` was updated with the actual result, status, evidence filename, and notes.
- `MARKETPLACE_ASSETS.md` was updated to show screenshot 01 and screenshot 02 are saved in the workspace.

Next test:

- Continue to FCG-003: Total limit closes form.
- Marketplace screenshot reminder: capture `screenshot-05-form-closed.png` after the third response closes the respondent-facing form.

Current completion: 67%.

Why: FCG-001 and FCG-002 now have real evidence. The next critical proof is respondent-side auto-close after three submissions.

## Stage 5 Update: FCG-003 Passed

Observed result:

- The tester completed FCG-003 and saved `screenshot-05-form-closed.png` in the project folder.
- The screenshot shows the respondent-facing closed page with the message `此表單已達名額上限，目前不再接受回覆。`

Result:

- FCG-003 is passed.
- `TEST_PLAN.md` was updated with the actual result, status, evidence filename, and notes.
- `MARKETPLACE_ASSETS.md` was updated to show screenshot 05 is saved in the workspace.

Next test:

- Continue to FCG-004: Manual check.
- Reopen the form from the sidebar, then click `立即檢查`.
- Since the response count is still at or above the limit, the manual check may close the form again. That is expected.
- Capture the inline result or alert if useful for evidence.

Current completion: 69%.

Why: total response limit save and respondent-facing auto-close are now proven with real screenshots. Manual check and choice-limit tests remain.

## Stage 5 Update: FCG-004 Passed

Observed result:

- The tester completed FCG-004 and saved `screenshot-fcg-004-manual-check.png`.
- The sidebar reports `目前回覆數為 3/3，表單已自動關閉。`
- Sidebar status shows response count `3`, form status `已關閉`, and submit trigger `已安裝`.

Result:

- FCG-004 is passed.
- The behavior is expected because manual check reapplies rules and closes the form again when the response count is still at the limit.

Next test:

- Continue to FCG-005: Dropdown choice limit.
- Before FCG-005, reopen the form and configure choice capacity for the dropdown question with per-choice limit `1`.
- Marketplace screenshot reminder: capture `screenshot-03-choice-capacity-settings.png` after the choice capacity setting is saved, then later capture `screenshot-04-choice-removed.png` after selecting `A` and refreshing the respondent form.

Current completion: 71%.

Why: manual enforcement is now verified. The remaining core behavior is choice hiding, restore, disable, existing responses, and no-choice form handling.

## Stage 5 Issue: FCG-005 Setup Blocked By Invalid Form Update

Observed result:

- While configuring FCG-005, the sidebar showed `Exception: 資料更新表單無效。`
- The screenshot shows total response limit still enabled with limit `3`.
- Previous tests already produced response count `3/3`, so total limit enforcement is still active.
- The configured choice item is `測試`, type `MULTIPLE_CHOICE`, with only `1` current choice.
- FCG-005 expects a dropdown question with choices `A`, `B`, and `C`.

Root cause assessment:

- This is most likely a test setup mismatch before FCG-005, not enough evidence for a product logic failure yet.
- The active total-limit rule can immediately close the form during save/manual enforcement.
- The choice capacity test is being configured against a single-choice multiple-choice item, not the planned dropdown `A/B/C`.

Next corrective action:

1. For FCG-005, use a clean form state or duplicate form if possible.
2. Add a dropdown question named `Dropdown slot` with choices `A`, `B`, `C`.
3. Temporarily turn off `啟用總回覆人數限制` for the choice-capacity test, or use a fresh form with response count `0`.
4. Enable `選項額滿後自動隱藏`.
5. Enable only the dropdown rule and set per-choice capacity to `1`.
6. Keep `所有已設定選項都額滿時關閉表單` enabled.
7. Save settings and capture `screenshot-03-choice-capacity-settings.png`.

Code follow-up:

- Consider adding sidebar/preflight validation to warn when a selected choice item has fewer than two choices before saving a choice capacity rule.

Current completion: 71%.

Why: FCG-005 has not run yet; it is blocked by form/setup state that does not match the test plan.

## Stage 5 Update: FCG-005 Setup Corrected

Observed result:

- The tester completed `screenshot-03-choice-capacity-settings.png`.
- The screenshot shows `Dropdown slot` as a dropdown/list question with choices `A`, `B`, and `C`.
- Form Capacity Guard shows choice hiding enabled, close-when-all-full enabled, the `Dropdown slot` rule checked, and per-choice limit set to `1`.

Result:

- The previous FCG-005 setup blocker is resolved.
- FCG-005 is now in progress, pending actual respondent submissions and choice-removal evidence.
- `MARKETPLACE_ASSETS.md` was updated to show screenshot 03 is saved in the workspace.

Next action:

1. Reopen the respondent form if needed.
2. Submit one response selecting dropdown `A`.
3. Refresh the respondent form.
4. Confirm `A` is removed and only `B`/`C` remain.
5. Capture `screenshot-04-choice-removed.png`.
6. Continue with `B` and `C` until all configured choices are full and the form closes.

Current completion: 72%.

Why: choice capacity setup now has real evidence, but the actual removal behavior has not been proven yet.

## Stage 5 Update: FCG-005 First Choice Removed

Observed result:

- The tester completed `screenshot-04-choice-removed.png`.
- The screenshot shows the `Dropdown slot` editor choices changed from `A`, `B`, `C` to `B`, `C` after a response selected `A`.
- This confirms the add-on removed the filled choice from the form configuration.

Result:

- The first FCG-005 removal check is verified.
- FCG-005 remains in progress because the full sequence still requires submitting `B`, refreshing, submitting `C`, and confirming all-full closure.

Marketplace note:

- The saved screenshot is editor-side evidence. For the final Marketplace asset, a respondent-side screenshot after refresh is preferable because it shows what form fillers experience.

Next action:

1. Open or refresh the respondent form.
2. Confirm `A` is no longer selectable.
3. Submit one response selecting `B`.
4. Refresh the respondent form and confirm only `C` remains.
5. Submit `C`.
6. Confirm the form closes because all configured choices are full.

Current completion: 73%.

Why: choice removal has been proven for the first option, but full dropdown capacity behavior is not fully complete until B/C and all-full close are verified.

## Stage 5 Update: FCG-005 Passed

Observed result:

- The tester completed `screenshot-fcg-005-all-choices-full-closed.png`.
- The respondent-facing page shows `所有可選名額皆已額滿，此表單目前不再接受回覆。`
- Together with `screenshot-03-choice-capacity-settings.png` and `screenshot-04-choice-removed.png`, the test proves dropdown setup, first choice removal, and all-full close behavior.

Result:

- FCG-005 is passed.
- `TEST_PLAN.md` was updated with the complete actual result and evidence list.
- `MARKETPLACE_ASSETS.md` was updated to include the all-full close screenshot.

Next test:

- Continue to FCG-006: Multiple choice limit.
- Reopen the form, restore or create a multiple-choice question with `A`, `B`, `C`, enable its per-choice limit `1`, and submit `A`, `B`, `C` across separate responses.
- Capture evidence that filled multiple-choice choices are removed and original choices are stored.

Current completion: 76%.

Why: total limit, manual check, and dropdown choice limit are now verified with real evidence. Multiple-choice, checkbox, restore, disable, existing-response, and no-choice tests remain.

## Stage 6 Start: Release Preparation After Partial Test Pass

User decision:

- Stop functional testing after FCG-005.
- Produce a success report for all completed real tests.
- Move to the next phase.

Completed:

- Added `TEST_SUCCESS_REPORT.md`.
- Updated `TEST_PLAN.md` to mark FCG-001 through FCG-005 as passed or completed with evidence.
- Marked FCG-006 through FCG-011 as deferred by user request, not passed at that time. This was later superseded when the tester completed FCG-006 through FCG-011 and confirmed all passed.
- Updated `MARKETPLACE_ASSETS.md` to reflect the captured screenshot set and the stop-testing decision.

Passed real tests:

- FCG-001 sidebar opens.
- FCG-002 total response limit saves.
- FCG-003 total response limit closes respondent form.
- FCG-004 manual check reapplies rules.
- FCG-005 dropdown choice capacity hides filled choices and closes when all configured choices are full.

Next phase tasks:

1. Prepare the public GitHub repository.
2. Replace placeholder support, privacy, terms, and repository URLs.
3. Create custom logo assets and update the eventual public logo URL.
4. Prepare Google Cloud standard project.
5. Configure OAuth consent screen with the current scopes.
6. Configure Google Workspace Marketplace SDK.
7. Create a versioned Apps Script deployment.
8. Prepare reviewer instructions from `TEST_SUCCESS_REPORT.md`.

Current completion: 78%.

Why: the core MVP behavior had partial real-test evidence through FCG-005 at that time, and the project moved from functional test execution into release setup. This was later superseded when FCG-006 through FCG-011 were completed and confirmed passed by the tester.

## Stage 6 Update: Release Preparation Documents

Completed:

- Added `RELEASE_PREPARATION.md` as the source-of-truth release readiness summary.
- Added `MARKETPLACE_REVIEWER_INSTRUCTIONS.md` with reviewer flows for total response limit, manual check, and dropdown choice capacity.
- Updated `PRIVACY.md` and `TERMS.md` to use Traditional Chinese first with English summaries.
- Updated `MARKETPLACE_LISTING_DRAFT.md` to include Traditional Chinese Marketplace copy and English reviewer-friendly copy.
- Updated `GITHUB_PREP.md` with URL placeholders for repository, issues, Privacy, Terms, Security, logo, and support email.
- Updated `MARKETPLACE_FIELD_CHECKLIST.md` with actual fields to record for Google Cloud, OAuth consent, and Marketplace SDK.
- Updated `MARKETPLACE_ASSETS.md` to explicitly flag the current Google Forms official logo as a blocker.
- Updated `MARKETPLACE_SUBMISSION.md` to point reviewers to the new reviewer instruction draft.

Consistency result:

- Product name, UI language, data handling, OAuth scopes, test evidence status, and known limitations are now aligned across release docs.
- `appsscript.json` still uses the Google Forms official icon and must be replaced before final Apps Script versioning.
- Public URLs and support email remain placeholders until the GitHub repository exists.

Skill decision:

- Do not create `google-workspace-marketplace-addon-release` yet.
- Reason at that time: FCG-006 through FCG-011 remained deferred, and external Marketplace setup had not gone through a full review loop. This was later superseded by tester confirmation that FCG-006 through FCG-011 passed.

Current completion: 80%.

Why: release preparation documentation is now materially stronger and reviewer instructions exist, but public repository setup, custom logo, Cloud/OAuth/Marketplace configuration, Apps Script versioning, and final submission are still incomplete.

## Stage 6 Update: FCG-006 Through FCG-011 Passed By Tester Confirmation

User update:

- The tester completed FCG-006 through FCG-011 and reported that all remaining functions work normally.
- The tester explicitly said no additional screenshots need to be sent to Codex.

Documentation updated:

- `TEST_PLAN.md` now marks FCG-006 through FCG-011 as Passed.
- `TEST_SUCCESS_REPORT.md` now records FCG-001 through FCG-011 as passed.
- `RELEASE_PREPARATION.md` and `MARKETPLACE_REVIEWER_INSTRUCTIONS.md` now distinguish screenshot-backed evidence from tester-confirmed evidence.
- `SKILLS.md` now records the rule for tester-confirmed tests without additional screenshots.

Evidence note:

- FCG-001 through FCG-005 have saved screenshot evidence.
- FCG-006 through FCG-011 are passed by tester confirmation and do not have additional screenshots stored in the workspace.

Next phase:

- GitHub public repository and custom logo preparation.

Current completion: 83%.

Why: the main functional test set FCG-001 through FCG-011 is now complete, and release preparation docs exist. Remaining work is external release setup: GitHub, public URLs, support email, custom logo, Cloud/OAuth/Marketplace configuration, Apps Script versioning, and submission.

## Stage 4 Preparation: Real Google Form Backtest

Completed:

- Updated `TEST_PLAN.md` with a concrete `FCG-20260508-01` real test run.
- Added step-by-step instructions for pasting `Code.gs`, `Sidebar.html`, and `appsscript.json` into a bound Apps Script project.
- Converted FCG-001 through FCG-011 into ready-to-run records with expected result, evidence target, and notes.
- Updated `MARKETPLACE_ASSETS.md` with a screenshot capture order tied to the real test run.
- Re-ran the local JavaScript syntax check for `Code.gs` and the sidebar script.

Validation:

- Local syntax validation passed: `Apps Script and sidebar JavaScript syntax OK`.

What could not be completed locally:

- The actual Google Forms add-on authorization, respondent submissions, trigger verification, screenshots, and FCG-001 through FCG-011 actual results require the tester's Google account in the browser.

Root cause:

- Google Forms, Apps Script installable triggers, and Workspace Marketplace screenshots are external-account workflows. They cannot be truthfully marked passed from the local workspace alone.

Effective workflow:

1. Prepare the exact test form shape first.
2. Paste the current local files into a bound Apps Script project.
3. Run FCG-001 through FCG-011 in order.
4. Stop at the first failure and record the actual result before patching.
5. Use screenshots from the same test run as Marketplace evidence.

Current completion: 62%.

Why: the test harness, evidence plan, and screenshot order are ready, but the actual real-form evidence and bug-fix loop are still pending.

## Next Conversation Prompt

```text
我正在開發 Google Forms 擴充功能 Form Capacity Guard，目標是開源並上架 Google Workspace Marketplace。

目前專案位置：
C:\Users\iL340\Documents\Codex\2026-05-08\outlook\google-form-capacity-addon

請先閱讀 README.md、Code.gs、Sidebar.html、appsscript.json、TEST_PLAN.md、MARKETPLACE_ASSETS.md、workflow.md、mistakes.md、SKILLS.md。

目前進度：
- 已完成 Apps Script MVP。
- 已補強 submit trigger、設定保存、disable/reopen restore、sidebar UX。
- 已新增 Marketplace assets plan、GitHub repository prep、mistakes/workflow/Skill 判斷文件。
- JavaScript syntax check 已通過。
- 已把 TEST_PLAN.md 更新成 FCG-20260508-01 真實 Google Form 回測腳本。
- 已把 MARKETPLACE_ASSETS.md 更新成 Marketplace 截圖實際拍攝順序。
- 目前完成度：62%。

請接續執行下一階段：
1. 帶我照 TEST_PLAN.md 的 Real Google Form Setup Steps 建立測試表單，貼上 Code.gs、Sidebar.html、appsscript.json。
2. 依照 Active Test Run: FCG-20260508-01 完成 FCG-001 到 FCG-011，逐項填入 Actual result、Status、Evidence、Notes。
3. 如果任何測試失敗，先記錄錯誤現象與根因，再修正 Code.gs、Sidebar.html 或文件。
4. 依照 MARKETPLACE_ASSETS.md 的 Screenshot Capture Order 拍攝 Marketplace 截圖。
5. 每完成一個階段後，請更新 TEST_PLAN.md、mistakes.md、workflow.md、SKILLS.md，判斷是否建立 google-workspace-marketplace-addon-release Skill，列出尚未完成任務與目前完成百分比。
6. 最後輸出下一階段 prompt，讓我貼到下一個視窗。
```

## Stage 7 Update: GitHub Public Repository And Custom Logo Preparation

Completed:

- Ran a public repository scan using PowerShell fallback search because `rg` was blocked in this Windows environment.
- Added `PUBLIC_REPOSITORY_AUDIT.md` with sensitive-info findings, public-readiness status, and first-commit checklist.
- Redacted the private Google Form edit URL from `TEST_PLAN.md` and `workflow.md`.
- Added `assets/logo-source.svg` as a custom logo source draft that does not use Google Forms official branding.
- Added `assets/README.md` with planned logo files, export rules, and the manifest logo URL plan.
- Updated `MARKETPLACE_ASSETS.md`, `GITHUB_PREP.md`, `RELEASE_PREPARATION.md`, `README.md`, and `SECURITY.md` for the current public-release state.

Key decision:

- Do not update `appsscript.json` to a placeholder or non-existent raw GitHub URL. Keep the current temporary local logo URL until `assets/logo-128.png` exists in the public repository.

Public readiness result:

- No API keys, OAuth tokens, client secrets, private keys, passwords, or real support email addresses were found in text files.
- The real test Google Form edit URL was found and redacted.
- Placeholder GitHub/support/Cloud/Apps Script values remain intentionally unresolved until the public repo, support email, Cloud project, and Apps Script version exist.

Remaining blockers:

- Export `assets/logo-32.png` and `assets/logo-128.png` from `assets/logo-source.svg`.
- Choose GitHub owner, developer/publisher name, and support email.
- Create the public GitHub repository.
- Replace public URL placeholders after the repository exists.
- Update `appsscript.json` `logoUrl` only after the public `logo-128.png` URL is real.
- Run one final screenshot privacy pass before committing images.

Current completion: 86%.

Why: the public repository audit and custom logo source are now started, but the repo is still not created and PNG logo/public URLs are still missing.

## Stage 8 Update: GitHub Repository Creation And Public URL Replacement Preparation

Completed:

- Reran the public repository audit with PowerShell fallback search.
- Confirmed no API keys, OAuth tokens, private keys, passwords, real support email addresses, or unredacted Google Forms edit URLs were found in text files.
- Confirmed remaining findings are expected placeholders and the temporary Google Forms product icon URL in `appsscript.json`.
- Exported `assets/logo-32.png` and `assets/logo-128.png` from the custom logo source.
- Updated `PUBLIC_REPOSITORY_AUDIT.md`, `MARKETPLACE_ASSETS.md`, `assets/README.md`, `GITHUB_PREP.md`, and `RELEASE_PREPARATION.md`.
- Kept `appsscript.json` unchanged because `assets/logo-128.png` does not yet have a real public HTTPS URL.

Recommended identity decisions:

- GitHub owner: use the stable public GitHub account or organization that should appear in all public URLs.
- Repository name: `form-capacity-guard`.
- Developer / publisher name: `Lin Po-Ting`, unless a public organization name is preferred.
- Support email: create a dedicated public mailbox, for example `formcapacityguard@gmail.com` if available.

Public URL replacement list after the repository exists:

- Application home page: `https://github.com/<github-owner>/form-capacity-guard`
- Support URL: `https://github.com/<github-owner>/form-capacity-guard/issues`
- Privacy Policy URL: `https://github.com/<github-owner>/form-capacity-guard/blob/main/PRIVACY.md`
- Terms of Service URL: `https://github.com/<github-owner>/form-capacity-guard/blob/main/TERMS.md`
- Security policy URL: `https://github.com/<github-owner>/form-capacity-guard/blob/main/SECURITY.md`
- Logo URL: `https://raw.githubusercontent.com/<github-owner>/form-capacity-guard/main/assets/logo-128.png`

Safe git sequence prepared:

```powershell
git init
git branch -M main
git status --short
git add .
git status --short
git commit -m "Initial Form Capacity Guard open-source release"
git remote add origin https://github.com/<github-owner>/form-capacity-guard.git
git push -u origin main
```

Remaining blockers:

- Finalize GitHub owner, developer / publisher name, and support email.
- Create the public GitHub repository.
- Run a manual visual privacy pass on screenshots before committing them.
- Replace public URL placeholders after the repository exists.
- Update `appsscript.json` `logoUrl` only after the raw GitHub `logo-128.png` URL opens successfully.

Current completion: 88%.

Why: the audit is clean enough to proceed, and logo PNG assets now exist. The remaining work depends on external identity decisions and creating the public GitHub repository.

## Next Conversation Prompt After Stage 7

```text
我正在開發 Google Forms 擴充功能 Form Capacity Guard，目標是開源並上架 Google Workspace Marketplace。

目前專案位置：
C:\Users\iL340\Documents\Codex\2026-05-08\outlook\google-form-capacity-addon

請先閱讀：
README.md
PUBLIC_REPOSITORY_AUDIT.md
GITHUB_PREP.md
MARKETPLACE_ASSETS.md
RELEASE_PREPARATION.md
MARKETPLACE_FIELD_CHECKLIST.md
TEST_SUCCESS_REPORT.md
workflow.md
mistakes.md
SKILLS.md
appsscript.json
assets/README.md
assets/logo-source.svg

目前進度：
- Apps Script MVP 已完成。
- 介面語言使用繁體中文。
- 本機 syntax preflight 已通過。
- 真實 Google Form 測試 FCG-001 到 FCG-011 已全部 Passed。
- FCG-001 到 FCG-005 有截圖證據。
- FCG-006 到 FCG-011 由測試者確認 Passed，沒有額外截圖。
- Release preparation、Marketplace reviewer instructions、Marketplace field checklist 已建立。
- Public repository audit 已建立，私人測試 Google Form edit URL 已 redacted。
- Custom logo source SVG 已建立於 assets/logo-source.svg。
- appsscript.json 仍暫時使用 Google Forms 官方 icon，正式送審前必須等 logo-128.png 有 public HTTPS URL 後再替換。
- 目前完成度：86%。

目前重要 blocker：
- 尚未建立 public GitHub repository。
- 尚未選定 support email。
- 尚未匯出 assets/logo-32.png 與 assets/logo-128.png。
- 尚未把 custom logo PNG 放到 public URL。
- 尚未更新 appsscript.json logoUrl 為真實 public custom logo URL。
- 尚未建立 Google Cloud standard project。
- 尚未設定 OAuth consent screen。
- 尚未設定 Google Workspace Marketplace SDK。
- 尚未建立正式 Apps Script version。

請接續執行下一階段：GitHub repository creation and public URL replacement。

任務：
1. 再次執行 public repository audit，確認沒有秘密、私人表單 URL、錯誤 URL、或不適合公開的內容。
2. 協助決定 GitHub owner、repository name、developer/publisher name、support email 的填寫策略。
3. 匯出或規劃匯出 assets/logo-32.png 與 assets/logo-128.png。
4. 建立或準備 public GitHub repository 後，列出所有需要替換的 public URL。
5. 只有在 logo-128.png 已經有真實 public HTTPS URL 時，才更新 appsscript.json 的 logoUrl。
6. 準備第一次 git init / git add / git commit / git remote / git push 的安全步驟。
7. 每完成一個階段後，更新 workflow.md、mistakes.md、SKILLS.md。
8. 最後輸出下一個新對話窗 Prompt。
```
