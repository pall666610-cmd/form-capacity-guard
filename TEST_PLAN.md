# Form Capacity Guard Test Plan

This file is the working backtest record for Marketplace readiness. Each test should be run on a real Google Form through an Apps Script test deployment before Marketplace submission.

## Test Environment

| Field | Value |
| --- | --- |
| Test run ID | FCG-20260508-01 |
| Tester | 林柏廷 |
| Date | 2026-05-08 |
| Google account type | Personal / Workspace |
| Browser and version |  |
| Apps Script project ID |  |
| Apps Script version |  |
| Test deployment URL |  |
| Google Form edit URL | `<redacted-test-form-edit-url>` |
| Google Form respondent URL |  |
| Linked response sheet URL |  |
| appsscript.json scopes | forms.currentonly, script.container.ui, script.scriptapp |

## Real Google Form Setup Steps

Use a fresh test form so the evidence is clean and safe to screenshot.

1. Create a Google Form named `Form Capacity Guard Test - FCG-20260508-01`.
2. Add these questions:
   - `Name` as short answer.
   - `Dropdown slot` as dropdown with `A`, `B`, `C`.
   - `Multiple-choice slot` as multiple choice with `A`, `B`, `C`.
   - `Checkbox slot` as checkbox with `A`, `B`, `C`.
3. Open the form editor menu: More > Script editor.
4. Replace Apps Script files with the local project files:
   - `Code.gs`
   - `Sidebar.html`
   - `appsscript.json`
5. If `appsscript.json` is hidden, open Apps Script Project Settings and enable `Show "appsscript.json" manifest file in editor`.
6. Save the Apps Script project.
7. Return to the Google Form editor and refresh the page.
8. Open Extensions > Form Capacity Guard > Open capacity settings.
9. Complete the authorization flow using the same test account.
10. Link the form to a response spreadsheet before running response-count tests.
11. Record the form edit URL, respondent URL, linked sheet URL, Apps Script project ID, and evidence screenshot links in this file.

## Execution Notes

- Run FCG-001 through FCG-011 in order.
- Refresh the respondent form after every submission that should hide a choice.
- Use screenshots from this same test run for Marketplace assets.
- Keep `Close this form when all configured choices are full` enabled during Marketplace MVP screenshots. If it is disabled and every choice is hidden, Google Forms still requires the item to have at least one visible choice, which can create a confusing placeholder path.
- If any test fails, stop and record the actual result before changing code.
- FCG-012 through FCG-014 remain later tests for simultaneous submissions, authorization evidence, and listing consistency.

## Current Execution Status

Status as of 2026-05-08:

- Local preflight completed: `Code.gs`, sidebar JavaScript, and `appsscript.json` syntax passed with Node.
- Real Google Form execution completed for FCG-001 through FCG-005.
- The tester asked to stop the remaining functional tests and move to the next phase.
- Real Google Form execution completed for FCG-006 through FCG-011 by tester confirmation.
- FCG-006 through FCG-011 are passed by tester confirmation; no additional screenshots were provided for local evidence storage.
- Marketplace screenshots captured so far must remain tied to the same tested Apps Script version.

Live run handoff:

1. Tester creates the form using the setup steps above.
2. Tester pastes the current `Code.gs`, `Sidebar.html`, and `appsscript.json`.
3. Tester runs FCG-001 first and sends the actual result plus screenshot path/link.
4. Codex records the result, diagnoses any failure, and only then moves to the next test.

## Test Record Format

| ID | Scenario | Preconditions | Steps | Expected result | Actual result | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FCG-001 | Sidebar opens | New Google Form with add-on test deployment installed | Open form editor, open Extensions > Form Capacity Guard > Open capacity settings | Sidebar loads title, response count, form status, and settings controls |  | Not run | Screenshot link |  |
| FCG-002 | Save total response limit | Empty form, sidebar open | Enable total limit, set limit to 3, enable auto close, save | Settings save, no error, submit trigger exists |  | Not run | Screenshot link |  |
| FCG-003 | Total limit closes form | Total limit 3 enabled | Submit 3 responses from respondent URL | Responses 1 and 2 accepted; after response 3 form stops accepting responses and custom closed message appears |  | Not run | Screenshot link |  |
| FCG-004 | Manual check | Total limit enabled | Reopen form, run immediate check from menu/sidebar | Add-on reports current response count and applies current rules |  | Not run | Screenshot link |  |
| FCG-005 | Dropdown choice limit | Dropdown has A, B, C; per-choice limit 1 enabled | Submit A, refresh respondent form, submit B, refresh, submit C | Filled choices are removed after each submission; all full closes form if enabled |  | Not run | Screenshot link |  |
| FCG-006 | Multiple choice limit | Multiple-choice question has A, B, C; per-choice limit 1 enabled | Submit A, B, C across separate responses | Filled choices are removed and original choices are stored |  | Not run | Screenshot link |  |
| FCG-007 | Checkbox multi-answer count | Checkbox question has A, B, C; per-choice limit 1 enabled | Submit one response selecting A and B | A and B both count as used and are removed on enforcement |  | Not run | Screenshot link |  |
| FCG-008 | Reopen and restore choices | Form closed by limit; original choices saved | Click Reopen form | Form accepts responses and configured original choices return |  | Not run | Screenshot link |  |
| FCG-009 | Disable guard | Guard enabled with trigger | Click Disable guard, then submit another response | Config is disabled, trigger removed, no automatic close or choice hiding occurs |  | Not run | Screenshot link |  |
| FCG-010 | Existing responses | Form already has 2 responses before enabling limit 3 | Enable total limit 3, submit one new response | Add-on counts existing responses and closes at 3 total |  | Not run | Screenshot link |  |
| FCG-011 | No choice questions | Form has only short-answer questions | Open sidebar and save total limit | Sidebar shows no available choice rules; total limit still works |  | Not run | Screenshot link |  |
| FCG-012 | Near-simultaneous submissions | Limit 1 or choice limit 1 | Open respondent URL in two browsers and submit close together | Add-on eventually closes/removes choices; any short overbooking is recorded as known limitation |  | Not run | Screenshot link |  |
| FCG-013 | Authorization flow | Fresh account/test user | Install/open add-on and approve scopes | Consent screen shows only Forms current file, container UI, and Apps Script trigger management scopes |  | Not run | Screenshot link |  |
| FCG-014 | Marketplace listing consistency | Listing draft and screenshots ready | Compare listing claims with actual UI | No unsupported claims; screenshots match current sidebar and behavior |  | Not run | Screenshot link |  |

## Active Test Run: FCG-20260508-01

| ID | Scenario | Preconditions | Steps | Expected result | Actual result | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FCG-001 | Sidebar opens | Fresh test Google Form with project files pasted into bound Apps Script | Refresh form editor, open Extensions > Form Capacity Guard > Open capacity settings | The sidebar loads title, response count, form status, trigger status, and settings controls. | Sidebar opened successfully. Screenshot shows response count `0`, form status `已關閉`, submit trigger `已安裝`, saved notice, and the total response limit controls. | Passed | `screenshot-01-sidebar-overview.png` | The screenshot proves FCG-001. Product brand text remains `Form Capacity Guard`; working UI labels should continue in Traditional Chinese. |
| FCG-002 | Save total response limit | Empty form, sidebar open | Enable total limit, set maximum responses to 3, keep auto-close enabled, save | Settings save, no error, submit trigger shows Installed | Settings saved successfully. Screenshot shows total response limit enabled, maximum responses set to `3`, auto-close enabled, saved notice visible, and submit trigger installed. | Passed | `screenshot-02-total-limit-settings.png` | Original screenshot file was named `screenshot-02-sidebar-overview.png`; it was renamed to match the Marketplace capture plan. |
| FCG-003 | Total limit closes form | FCG-002 passed | Submit 3 responses from respondent URL | Responses 1 and 2 accepted; after response 3 form stops accepting responses and custom closed message appears | After reaching the total response limit, the respondent page shows the custom closed message: `此表單已達名額上限，目前不再接受回覆。` | Passed | `screenshot-05-form-closed.png` | Screenshot confirms respondent-facing auto-close behavior after the total limit was reached. |
| FCG-004 | Manual check | Form closed by total limit | Reopen form, then click Check now from sidebar or Run capacity check from menu | Add-on reports current response count and applies current rules | Manual check reports `目前回覆數為 3/3，表單已自動關閉。`; sidebar status shows response count `3`, form status `已關閉`, and submit trigger `已安裝`. | Passed | `screenshot-fcg-004-manual-check.png` | Expected behavior: because the response count still equals the limit, manual check closes the form again. |
| FCG-005 | Dropdown choice limit | Dropdown slot has A, B, C; choice limiter enabled for dropdown; per-choice limit 1; close when all full enabled | Reopen form, submit A, refresh respondent form, submit B, refresh, submit C | Filled dropdown choices are removed after each submission; all full closes form | Dropdown choice capacity passed. Setup screenshot shows `Dropdown slot` with `A/B/C`, first-removal screenshot shows `A` removed and `B/C` remaining, and final respondent screenshot shows all choices full message: `所有可選名額皆已額滿，此表單目前不再接受回覆。` | Passed | `screenshot-03-choice-capacity-settings.png`; `screenshot-04-choice-removed.png`; `screenshot-fcg-005-all-choices-full-closed.png` | `screenshot-04-choice-removed.png` is editor-side evidence; a respondent-side refreshed dropdown screenshot is preferred for final Marketplace assets if available. |
| FCG-006 | Multiple choice limit | Multiple-choice slot has A, B, C; per-choice limit 1 | Reopen form, submit A, refresh, submit B, refresh, submit C | Filled multiple-choice choices are removed and original choices are stored | Tester confirmed the multiple-choice limit works normally: filled choices are removed as expected and original choices are preserved for restore. | Passed | Tester confirmation; no additional screenshot provided | User completed the test and reported all behavior normal. |
| FCG-007 | Checkbox multi-answer count | Checkbox slot has A, B, C; per-choice limit 1 | Reopen form, submit one response selecting A and B, refresh respondent form | A and B both count as used and are removed on enforcement | Tester confirmed checkbox multi-answer counting works normally: selected choices are counted and removed as expected. | Passed | Tester confirmation; no additional screenshot provided | User completed the test and reported all behavior normal. |
| FCG-008 | Reopen and restore choices | Form closed by total or choice limit; original choices saved | Click Reopen form in sidebar | Form accepts responses and configured original choices return | Tester confirmed reopen restores the form to accepting responses and restores configured original choices. | Passed | Tester confirmation; no additional screenshot provided | User completed the test and reported all behavior normal. |
| FCG-009 | Disable guard | Guard enabled with submit trigger installed | Click Disable guard, then submit another response | Config is disabled, trigger removed, choices restored, new response does not auto-close/hide choices | Tester confirmed disable guard turns off limits, removes enforcement behavior, restores choices, and no longer auto-closes or hides choices after new responses. | Passed | Tester confirmation; no additional screenshot provided | User completed the test and reported all behavior normal. |
| FCG-010 | Existing responses | Fresh or reset form already has 2 responses before enabling total limit 3 | Enable total limit 3, submit one new response | Add-on counts existing responses and closes at 3 total | Tester confirmed existing responses are counted toward the total response limit and the form closes at the configured total. | Passed | Tester confirmation; no additional screenshot provided | User completed the test and reported all behavior normal. |
| FCG-011 | No choice questions | Fresh form has only short-answer questions | Open sidebar and save total limit | Sidebar shows no supported choice questions; total limit still works | Tester confirmed forms without choice questions still support total response limits normally. | Passed | Tester confirmation; no additional screenshot provided | User completed the test and reported all behavior normal. |

## Pass Criteria

- All P0/P1 functional tests pass: FCG-001 through FCG-011.
- FCG-012 behavior is documented even if short overbooking is reproducible.
- OAuth consent screen, Marketplace SDK, and `appsscript.json` list the same scopes.
- Screenshots used for Marketplace are from the tested version.
- Privacy Policy and Terms match observed data access and limitations.

Current execution decision:

- The active run originally stopped after FCG-005 by user request.
- FCG-001 through FCG-005 are passed with evidence.
- The tester later completed FCG-006 through FCG-011 and confirmed all remaining functional tests passed.
- FCG-006 through FCG-011 have tester confirmation but no additional screenshots stored in this workspace.
- Before final Marketplace submission, consider whether reviewer notes should distinguish screenshot-backed evidence from tester-confirmed evidence.
