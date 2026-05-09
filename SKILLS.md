# Skill Update Decision

## Current Decision

Decision: update or create a reusable Skill.

Suggested skill name: `google-workspace-marketplace-addon-release`

Purpose: guide future work on Google Apps Script add-ons that need open-source preparation, OAuth scope review, Marketplace listing assets, test evidence, and release-readiness checks.

Trigger examples:

- "Prepare this Apps Script add-on for Google Workspace Marketplace."
- "Review OAuth scopes, Marketplace screenshots, and README before submission."
- "Continue Form Capacity Guard release preparation."

## Rules Learned In This Phase

- Read Apps Script files with explicit UTF-8 on Windows before diagnosing mojibake as file corruption.
- Check `.gs` syntax by reading file content into Node, because `node --check Code.gs` can fail on the unknown `.gs` extension.
- Marketplace screenshots and listing copy must reflect the exact tested UI version.
- Marketplace functional tests must not be marked passed from local code inspection alone; Apps Script authorization, installable triggers, respondent submissions, and screenshots need real Google account evidence.
- Build a named test run before testing, including form title, expected questions, respondent URL, Apps Script project ID, linked sheet URL, evidence links, and actual results.
- Do not use Google product icons as the final Marketplace logo.
- Keep OAuth scopes synchronized across `appsscript.json`, OAuth consent screen, and Marketplace SDK.
- For add-ons that enforce limits after form submission, document that near-simultaneous submissions can briefly exceed capacity.
- For form choice restoration, store original choice values before hiding choices and restore them on reopen or disable.
- Use `LockService.getDocumentLock()` around save, manual check, reopen, disable, and submit-trigger enforcement to reduce concurrent state changes.
- Separate menu functions that call `FormApp.getUi().alert(...)` from sidebar RPC functions that should return data for inline messages.
- When choice capacity hides all choices, prefer closing the form for the Marketplace MVP evidence path; do not showcase a placeholder choice as the main behavior.

## Recommended Skill Shape

`SKILL.md` should stay short and point to references only when needed.

Suggested references:

- `references/apps-script-addon-review.md`
- `references/marketplace-assets.md`
- `references/oauth-scope-checklist.md`
- `references/release-workflow.md`

Suggested scripts:

- `scripts/check_apps_script_syntax.js`: reads `.gs` and sidebar `<script>` content, then validates JavaScript syntax.

## Status

Not created in the global Codex skills folder yet. This repository file records the decision and the reusable rules. Create the actual Skill after one real test run confirms the workflow.

## Current Update Decision After Stage 4 Preparation

Decision: update later, do not create the global Skill yet.

Reason: the real Google Form test run has been prepared but not executed. The Skill should include the confirmed failure modes and fixes from FCG-001 through FCG-011 after the tester records actual results.

Next Skill update trigger:

- FCG-001 through FCG-011 are completed.
- A real Apps Script failure or Marketplace evidence issue is found and fixed.
- Screenshot capture produces a repeatable ordering or naming rule worth reusing.

## Current Update Decision After Stage 5 Start

Decision: still do not create the global Skill yet.

Reason: the reusable release workflow is now clearer, but the most valuable Skill content should come from real Google Forms evidence, authorization behavior, trigger behavior, screenshot capture, and any fixes discovered during FCG-001 through FCG-011.

Additional rule to include later:

- Separate local preflight evidence from real Google Form evidence. Syntax checks can be recorded as preflight, but Marketplace readiness rows require tester-side screenshots or links from the exact active test run.
- Blank real-test handoffs should be recorded as blocked or waiting for tester result. Do not infer pass/fail, do not advance to the next functional test, and do not create release Skills before real evidence exists.
- If Codex cannot access a signed-in Google editor URL, record the URL and blocker, then ask the tester for a screenshot/result instead of treating the inaccessible page as a product bug.
- During Apps Script add-on tests, distinguish an installed third-party Marketplace add-on from the local bound script menu. The tested product is not ready for FCG-001 until `Form Capacity Guard` appears after saving the bound project and refreshing Forms.
- Confirm the intended Marketplace/UI language before taking screenshots. If the user changes language preference, update menu labels, sidebar copy, runtime messages, and screenshot plan before continuing functional evidence.
- For Traditional Chinese Apps Script files on Windows, use explicit UTF-8 reads or Node-based string inspection before concluding the file text is corrupted.
- Uploaded chat screenshots can prove a test step, but final Marketplace packaging still needs the image saved as a local asset with the planned filename.
- After each Marketplace screenshot, verify the file name matches the screenshot capture order before updating test evidence.
- Before switching from total-limit tests to choice-limit tests, reset or isolate form state: disable unrelated rules, verify response count preconditions, and confirm the target question type and choices match the test plan.

Suggested creation point:

- Create `google-workspace-marketplace-addon-release` after FCG-001 through FCG-011 have actual results, or immediately after the first real failure is diagnosed and fixed.

## Current Update Decision After Partial Test Stop

Decision: still do not create the global Skill yet.

Reason: the user stopped tests after FCG-005. The workflow has useful real evidence, but the deferred restore/disable/checkbox/multiple-choice tests mean the release Skill would still be missing several important Marketplace review lessons.

Reusable rule learned:

- If the user intentionally stops a test run, mark remaining tests as deferred instead of passed, create a success report for completed tests, and move to release preparation with the evidence gaps clearly listed.

## Current Update Decision After Release Preparation

Decision: still do not create the global Skill yet.

Reason: release preparation clarified Marketplace/GitHub/OAuth consistency rules, but the project still has unresolved external setup and deferred test coverage. A reusable Skill should be created after the custom logo, public URLs, OAuth consent screen, Marketplace SDK setup, and at least one fuller test/reviewer loop are complete.

Reusable rules learned:

- Treat release preparation as a three-way consistency pass across repository docs, `appsscript.json`, and external Google Cloud/Marketplace fields.
- Use Traditional Chinese as the primary public language when the add-on UI and screenshots are Traditional Chinese; add concise English summaries for reviewer clarity.
- Do not use Google Forms official branding as the final add-on logo.
- Keep GitHub repository URL, Privacy URL, Terms URL, Support URL, support email, and logo URL as explicit placeholders until the public repository exists.
- Reviewer instructions should cite real evidence files and distinguish screenshot-backed tests from tester-confirmed tests.
- Do not create a global release Skill until the external release setup loop has also been completed.

## Current Update Decision After FCG-006 Through FCG-011 Passed

Decision: still wait before creating the global Skill.

Reason: the functional test set is now passed by tester confirmation, but the reusable Marketplace release workflow still needs public URL setup, custom logo replacement, OAuth consent screen setup, Marketplace SDK setup, Apps Script versioning, and possibly reviewer feedback.

Reusable rules learned:

- When the tester confirms remaining real Google Form tests passed but does not provide screenshots, mark the tests as Passed with evidence `Tester confirmation; no additional screenshot provided`.
- Separate screenshot-backed evidence from tester-confirmed evidence in success reports and reviewer notes.
- After FCG-001 through FCG-011 pass, the next release priority shifts from functional validation to GitHub/public URL/custom logo/OAuth/Marketplace setup.

## Current Update Decision After GitHub And Logo Preparation

Decision: still wait before creating the global Skill, but add the following rules to the future `google-workspace-marketplace-addon-release` Skill.

Reason: this phase produced useful public-release rules, but the full external release loop still has not completed.

Reusable rules learned:

- Run a public repository audit before the first commit, including scans for API keys, OAuth tokens, private keys, support emails, real Google Form edit URLs, Google Sheet URLs, Apps Script IDs, and Cloud project IDs.
- Redact private test form edit URLs from public test plans and workflow logs while keeping the test evidence status.
- Create custom logo source assets before Marketplace setup, but do not update `appsscript.json` to a placeholder URL.
- Update `appsscript.json` `logoUrl` only after `logo-128.png` exists at a real public HTTPS URL.
- Keep `assets/logo-source.svg`, `assets/logo-32.png`, and `assets/logo-128.png` as the minimum logo asset set for a Marketplace release.
- Before committing screenshots, do a manual visual privacy pass for account emails, profile photos, private form titles, response contents, and unrelated browser UI.

## Current Update Decision After GitHub URL Replacement Preparation

Decision: still wait before creating the global Skill, but add the following rules to the future `google-workspace-marketplace-addon-release` Skill.

Reason: local audit and logo export are complete, but public repository creation, URL replacement, OAuth consent, Marketplace SDK setup, Apps Script versioning, and reviewer feedback are still pending.

Reusable rules learned:

- Treat GitHub owner, repository name, developer / publisher name, and support email as release identity fields. Do not replace public URLs until those fields are final.
- Prefer a stable dedicated support mailbox over a private personal email for Marketplace listings.
- Export logo PNG files locally before repository creation, but consider the manifest logo blocked until the public raw GitHub URL works.
- Use `git status --short` before and after `git add .` in the first commit flow.
- Do not push screenshots until a manual visual privacy pass checks for account emails, profile photos, private form titles, response data, and unrelated browser UI.
- If `rg` is unavailable or blocked on Windows, use PowerShell `Select-String` fallback for public repository audits.
