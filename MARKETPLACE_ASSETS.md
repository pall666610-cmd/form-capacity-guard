# Marketplace Assets Plan

This file defines the public listing assets needed before Google Workspace Marketplace review.

## Custom Logo

Requirements:

- Create a custom logo instead of using Google Forms or Google product branding.
- Export at least `32x32` and `128x128` PNG files.
- Keep the design readable at small sizes.
- Suggested concept: a simple form sheet with a capacity gauge or checkmark.
- Suggested colors: green `#0F9D58`, blue `#174EA6`, neutral text `#202124`.

Files to prepare:

- `assets/logo-32.png`
- `assets/logo-128.png`
- `assets/logo-source.svg` or editable source file

Current asset status:

- `assets/logo-source.svg` has been created as a custom source draft.
- `assets/logo-32.png` has been exported.
- `assets/logo-128.png` has been exported.
- Public hosting for `assets/logo-128.png` is complete through the GitHub raw URL.

Checklist:

- [x] Logo does not include Google Forms branding.
- [x] Logo is readable at 32px.
- [ ] Logo matches the sidebar and Marketplace screenshots.
- [x] `appsscript.json` `logoUrl` is updated to a public custom logo URL before submission.

Current logo URL:

- `appsscript.json` uses `https://raw.githubusercontent.com/pall666610-cmd/form-capacity-guard/main/assets/logo-128.png`.
- The raw URL was verified with `200 OK` and `Content-Type: image/png`.
- Do not create the final Apps Script version if this URL changes or becomes unavailable.

## Marketplace Screenshots

Use screenshots from the exact Apps Script version submitted for review.

Recommended set:

1. Sidebar overview showing form title, response count, form status, and trigger status.
2. Total response limit enabled with a realistic limit and closed-form message.
3. Choice capacity rules for a dropdown or multiple-choice question.
4. Form closed after capacity is reached, showing the respondent-facing closed message.
5. Reopen or disable flow showing choices restored and trigger state updated.

## Screenshot Capture Order

Capture screenshots during the `FCG-20260508-01` real test run, before changing any copy or code again.

1. `screenshot-01-sidebar-overview.png`
   - Open the fresh test form editor.
   - Open Extensions > Form Capacity Guard > Open capacity settings.
   - Capture the sidebar with form title, response count, form status, and submit trigger status.
2. `screenshot-02-total-limit-settings.png`
   - Enable total response limit.
   - Set maximum responses to `3`.
   - Keep auto-close enabled.
   - Use a clear closed message, then save.
   - Capture the saved sidebar state showing trigger installed.
3. `screenshot-03-choice-capacity-settings.png`
   - Enable choice capacity.
   - Enable one dropdown or multiple-choice rule.
   - Set capacity per choice to `1`.
   - Keep close-when-all-full enabled.
   - Capture the rule list and capacity setting.
4. `screenshot-04-choice-removed.png`
   - Submit one response selecting `A`.
   - Refresh the respondent form.
   - Capture the respondent view showing `A` removed and remaining choices visible.
5. `screenshot-05-form-closed.png`
   - Continue submissions until the total limit or all configured choices are full.
   - Capture the respondent-facing closed message.
6. `screenshot-06-reopen-restore.png`
   - Click Reopen form.
   - Refresh the respondent form.
   - Capture that original choices are restored.
7. `screenshot-07-disable-guard.png`
   - Click Disable guard.
   - Capture the sidebar showing submit trigger not installed.

Screenshot rules:

- Use real UI, not mockups.
- Avoid private form titles, customer data, emails, or response content.
- Keep listing claims aligned with what screenshots show.
- Retake screenshots after any sidebar copy or layout change.
- Do not include Google account profile photos, email addresses, unrelated browser tabs, or response spreadsheet rows with personal data.
- Use the same Apps Script version and same UI copy that will be submitted for review.

Current capture status as of 2026-05-08:

- `screenshot-01-sidebar-overview.png` is saved in the workspace for FCG-001.
- `screenshot-02-total-limit-settings.png` is saved in the workspace for FCG-002.
- `screenshot-03-choice-capacity-settings.png` is saved in the workspace for the FCG-005 setup step.
- `screenshot-04-choice-removed.png` is saved in the workspace for the first FCG-005 removal check.
- `screenshot-fcg-005-all-choices-full-closed.png` is saved in the workspace for the FCG-005 all-full close result.
- `screenshot-05-form-closed.png` is saved in the workspace for FCG-003.
- Consider retaking `screenshot-04-choice-removed.png` from the respondent form after refresh for final Marketplace packaging, because the current saved image is editor-side evidence.
- User requested stopping the remaining functional tests after FCG-005 and moving to release preparation.
- Continue capturing screenshots from the same real Google Form test run.
- Do not capture or reuse screenshots from local mockups, old versions, or a different Apps Script copy.

## Demo Video Script

Target length: 2 to 4 minutes.

Scene 1: Problem and install

- Show a Google Form used for event registration or appointment slots.
- Open the add-on from Google Forms.
- Show the OAuth consent screen and scopes if recording for OAuth verification.

Scene 2: Total limit

- Open Form Capacity Guard.
- Enable total response limit.
- Set maximum responses to `3`.
- Save settings and show the submit trigger status as installed.
- Submit responses until the form closes.

Scene 3: Choice capacity

- Reopen the form.
- Add a dropdown or multiple-choice question with time slots.
- Enable choice capacity.
- Set capacity per choice to `1`.
- Submit a response and refresh the respondent form to show the filled choice removed.

Scene 4: Restore and disable

- Click Reopen form and show original choices restored.
- Click Disable guard and show trigger status removed.

Scene 5: Data and limitations

- State that the add-on reads and updates only the active form.
- State that settings are stored in Apps Script document properties.
- State that simultaneous submissions can briefly exceed limits because checks run after submission.
