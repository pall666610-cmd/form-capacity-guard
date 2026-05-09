# Mistakes And Fixes Log

## 2026-05-08: PowerShell displayed UTF-8 as mojibake

Problem: `Code.gs` and `Sidebar.html` appeared to contain corrupted Chinese strings when read with default PowerShell output.

Root cause: PowerShell output encoding did not display UTF-8 content correctly in the first read.

Effective fix: reread files with `Get-Content -Raw -Encoding UTF8`.

Rule: before changing text because it looks corrupted on Windows, verify the file with explicit UTF-8.

## 2026-05-08: Node syntax check failed on file extension

Problem: `node --check Code.gs` and `node --check Sidebar.html` failed.

Root cause: Node 24 refused unknown `.gs` and `.html` extensions before parsing JavaScript.

Effective fix: use Node to read file contents and pass JavaScript to `new Function(...)`. For HTML, extract `<script>` blocks first.

Rule: check Apps Script syntax by content, not by extension.

## 2026-05-08: Race condition risk in trigger enforcement

Problem: near-simultaneous form submissions could trigger multiple enforcement runs at the same time.

Root cause: submit triggers, manual checks, reopen, disable, and save operations all touched the same form settings and choices without a document lock.

Effective fix: wrap state-changing operations in `LockService.getDocumentLock()` with a timeout.

Remaining risk: Google Forms checks happen after submission, so brief overbooking can still happen and must remain disclosed.

## 2026-05-08: Disable did not restore hidden choices

Problem: if choices had already been hidden, disabling the guard removed the trigger but did not restore original choices.

Root cause: restore logic only ran during reopen and depended on the previous flow.

Effective fix: restore configured original choices before disabling rules.

Rule: every exit path from a choice-hiding feature should restore or clearly preserve reversible state.

## 2026-05-08: Shallow config merge could break old saved settings

Problem: adding new nested config fields could leave old saved `choiceLimiter` objects missing defaults.

Root cause: `Object.assign(defaultConfig_(), JSON.parse(raw))` only merged the top level.

Effective fix: replace it with an explicit `mergeConfig_()` that normalizes nested fields.

Rule: use explicit config migration/normalization for Apps Script document properties.

## 2026-05-08: Sidebar check reused menu alert behavior

Problem: the same `runManualCheck()` function was used by both the Forms menu and the sidebar Check now button.

Root cause: the menu flow needs `FormApp.getUi().alert(...)`, but the sidebar flow should show inline status instead.

Effective fix: keep `runManualCheck()` for the menu and add `runSidebarCheck()` for sidebar calls.

Rule: separate Apps Script editor-menu UX from sidebar RPC UX when the same backend action needs different feedback behavior.

## 2026-05-08: Real Google Form tests cannot be honestly marked passed from local files

Problem: FCG-001 through FCG-011 require Google Forms UI, Apps Script authorization, installable trigger behavior, respondent submissions, and screenshots.

Root cause: these are external-account workflows. Local syntax checks can prove parse readiness, but they cannot prove add-on authorization, trigger creation, form closing, or respondent-facing behavior.

Effective fix: prepare a concrete real test run in `TEST_PLAN.md`, keep statuses as `Ready` until the tester runs them, and record actual results before patching.

Rule: do not mark Marketplace readiness tests as passed without real evidence from the tested Apps Script version.

## 2026-05-08: Choice limiter all-full path needs careful MVP evidence

Problem: Google Forms choice items need visible choices. When all configured choices are full, a placeholder choice can be confusing if the form is not closed.

Root cause: the add-on hides full choices after submission, but Google Forms does not provide a clean disabled-choice state for ordinary respondent choices.

Effective fix: keep `Close this form when all configured choices are full` enabled for the Marketplace MVP test run and screenshots. Record any all-full behavior before changing code.

Rule: for Marketplace screenshots, demonstrate the supported happy path where all-full choice capacity closes the form instead of leaving a placeholder-like choice path.

## 2026-05-08: Real test execution needs tester-side browser evidence

Problem: The next requested phase includes creating a Google Form, authorizing Apps Script scopes, submitting respondent answers, and taking Marketplace screenshots.

Root cause: These actions depend on the tester's signed-in Google account and external Google UI state. Local files can verify syntax and release preparation, but cannot prove OAuth consent, installable trigger creation, respondent-facing closure, or screenshots.

Effective fix: keep local preflight separate from real test status. Guide the tester through one test at a time, record the actual result and evidence before marking a row passed, and stop immediately on a real Google Forms failure.

Rule: do not fill `Actual result`, `Status`, or `Evidence` as passed for FCG-001 through FCG-011 until the tester provides real Google Form evidence from the active test run.

## 2026-05-08: Blank actual result handoff cannot advance a real test

Problem: FCG-001 was handed off with empty `Status`, `Actual result`, `Evidence`, and `Notes` fields.

Root cause: the test result was not included, so Codex cannot determine whether the sidebar opened, whether authorization succeeded, or whether a failure needs diagnosis.

Effective fix: update `TEST_PLAN.md` to show FCG-001 as waiting for tester result, and ask for the exact actual result plus screenshot evidence before moving to FCG-002.

Rule: when a real Marketplace-readiness test handoff is blank, record the blocker explicitly; do not infer pass/fail and do not patch code without a symptom.

## 2026-05-08: Signed-in Google Form editor could not be verified by Codex

Problem: The tester provided a Google Form edit URL, but Codex could not open and verify the sidebar in the signed-in Google Forms editor session.

Root cause: Google Form edit pages require the tester's Google account session and permissions. The available browser automation path was not available in this environment, so Codex could not interact with the editor UI directly.

Effective fix: record the form edit URL in `TEST_PLAN.md`, keep FCG-001 waiting for tester result, and ask the tester to provide a screenshot and visible result from their signed-in browser.

Rule: when an external Google editor page requires account state that Codex cannot access, treat it as an evidence blocker, not an application failure.

## 2026-05-08: Existing Marketplace add-on can be confused with the local test add-on

Problem: The Google Forms add-ons menu showed `LIMIT IT: FormLimiter & QR Code Generator`, but did not show the local `Form Capacity Guard` menu.

Root cause: The form currently has another Marketplace add-on available, while the local bound Apps Script project for Form Capacity Guard has not yet been installed, saved, or refreshed into the form editor.

Effective fix: open the form's Script editor, paste the local `Code.gs`, create `Sidebar.html`, enable and paste `appsscript.json`, save, then refresh the Google Form before rerunning FCG-001.

Rule: if the Forms add-ons menu shows a different add-on, do not proceed with authorization. First confirm the bound Apps Script project contains the current local files and the menu name matches the tested product.

## 2026-05-08: UI language must be decided before Marketplace screenshots

Problem: FCG-001 was authorized with the initial English UI, then the user requested Traditional Chinese.

Root cause: the Marketplace-facing language decision was made after the first sidebar open.

Effective fix: translate the local UI before taking Marketplace screenshots, then paste the updated files back into Apps Script and capture screenshots from the final UI language.

Rule: do not capture Marketplace screenshots until the product language, sidebar labels, menu labels, and user-facing messages match the intended listing language.

## 2026-05-08: PowerShell mojibake after Traditional Chinese translation

Problem: after translating `Code.gs`, `Get-Content` displayed Traditional Chinese strings as mojibake, making the file look corrupted.

Root cause: the terminal output encoding did not render UTF-8 Chinese reliably.

Effective fix: validate the file by reading it as UTF-8 through Node and checking real string snippets with `JSON.stringify`.

Rule: for Traditional Chinese Apps Script files on Windows, trust explicit UTF-8 validation over default PowerShell visual output.

## 2026-05-08: Screenshot file name drift

Problem: the FCG-002 screenshot was saved as `screenshot-02-sidebar-overview.png`, but the Marketplace asset plan expects `screenshot-02-total-limit-settings.png`.

Root cause: the screenshot was captured with a generic sidebar-overview name instead of the planned Marketplace capture filename.

Effective fix: rename the file to the planned filename before updating evidence records.

Rule: after each screenshot, immediately compare the filename against `MARKETPLACE_ASSETS.md` and rename it before marking the test passed.

## 2026-05-08: FCG-005 started from the wrong form state

Problem: configuring choice capacity produced `Exception: 資料更新表單無效。`

Root cause: FCG-005 was attempted while total response limit was still enabled at `3` and the form already had `3/3` responses. The selected choice item was also a single-choice `MULTIPLE_CHOICE` question named `測試`, while the test plan expects a dropdown question with `A`, `B`, and `C`.

Effective fix: run choice-capacity tests from a clean form state or fresh duplicate, disable the total response limit for FCG-005, and configure the planned dropdown `A/B/C` before saving the choice rule.

Rule: before starting a new capacity mode test, verify the previous mode is disabled or isolated, response counts match the preconditions, and the target question shape matches the test record.

## 2026-05-08: Release docs can drift across Marketplace, GitHub, and OAuth

Problem: release preparation touches README, Privacy Policy, Terms, Marketplace listing, OAuth consent screen, Marketplace SDK, and `appsscript.json`; if one surface changes alone, public claims can become inconsistent.

Root cause: Marketplace release data is duplicated across multiple files and external Google Cloud forms.

Effective fix: create a release preparation source-of-truth file and keep the product name, UI language, data handling, OAuth scopes, public URLs, logo URL, and test evidence status synchronized.

Rule: before creating the Apps Script version for review, compare `RELEASE_PREPARATION.md`, `MARKETPLACE_FIELD_CHECKLIST.md`, `MARKETPLACE_LISTING_DRAFT.md`, `PRIVACY.md`, `TERMS.md`, and `appsscript.json` in one pass.

## 2026-05-08: Google Forms official icon is not a final Marketplace logo

Problem: `appsscript.json` still used `https://www.gstatic.com/images/branding/product/1x/forms_48dp.png`.

Root cause: the MVP used a convenient Google Forms icon placeholder before custom branding existed.

Effective fix: keep the current logo only as a temporary placeholder, create custom 32px and 128px assets, host them at a public HTTPS URL, then replace `addOns.common.logoUrl` before final versioning.

Rule: never submit a Marketplace add-on using a Google product icon as the app's custom logo.

## 2026-05-09: Do not publish private test form edit URLs

Problem: `TEST_PLAN.md` and `workflow.md` contained a real Google Form edit URL from the private functional test run.

Root cause: test evidence was recorded faithfully during execution, but the same file later became part of the public GitHub preparation set.

Effective fix: redact the edit URL as `<redacted-test-form-edit-url>` before the first public commit.

Rule: before open-sourcing a Google Workspace add-on, scan docs for real Google Form, Google Sheet, Apps Script, and Cloud project URLs. Keep public evidence descriptive unless the URL is meant to be public.

## 2026-05-09: Do not replace manifest logoUrl with a fake public URL

Problem: the final custom logo URL depends on a public GitHub repository and exported PNG that do not exist yet.

Root cause: Marketplace docs need a future raw GitHub URL, but `appsscript.json` needs a working HTTPS URL for the actual submitted version.

Effective fix: create `assets/logo-source.svg` and document the replacement plan, but keep `appsscript.json` unchanged until `assets/logo-128.png` is publicly hosted.

Rule: never put placeholder Marketplace URLs into the Apps Script manifest. Use placeholders in planning docs only, then update the manifest after the URL is real.

## 2026-05-09: Public repository setup needs identity decisions before URL replacement

Problem: GitHub URL placeholders cannot be safely replaced until the GitHub owner, repository name, developer / publisher name, and support email are final.

Root cause: Marketplace, OAuth consent, README, Privacy, Terms, Security, and manifest logo URLs all depend on these public identity decisions. Guessing them would create broken or misleading public release metadata.

Effective fix: keep placeholders in planning docs, recommend `form-capacity-guard` as the repository name, recommend `Lin Po-Ting` as the publisher name based on the MIT license, and require a stable public support mailbox before replacement.

Rule: replace public URLs only after the repository and support identity are real; keep the manifest unchanged until the public raw logo URL works over HTTPS.

## 2026-05-09: Logo export can finish before public hosting

Problem: Marketplace needs custom PNG logo files, but the manifest also needs a public HTTPS URL.

Root cause: local asset creation and public URL availability are separate release steps.

Effective fix: export `assets/logo-32.png` and `assets/logo-128.png` locally, document them as ready, but keep `appsscript.json` on the temporary icon until the committed raw GitHub URL exists.

Rule: separate logo asset readiness from logo URL readiness in release checklists.
