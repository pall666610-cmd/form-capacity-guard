# Marketplace Reviewer Instructions Draft

Product: `Form Capacity Guard`

Host app: Google Forms

Interface language: Traditional Chinese

## Test Account / Access

No external server, database, or separate web account is required.

The add-on runs inside the active Google Form through Google Apps Script. To review it, install or open the add-on from a Google Form editor, authorize the requested scopes, and use a test form with simple questions.

## Requested OAuth Scopes

```text
https://www.googleapis.com/auth/forms.currentonly
https://www.googleapis.com/auth/script.container.ui
https://www.googleapis.com/auth/script.scriptapp
```

Scope justification:

- `forms.currentonly`: read and update only the active Google Form, including response counts, choice values, closed-form message, and accepting-responses state.
- `script.container.ui`: show the Google Forms editor menu and sidebar.
- `script.scriptapp`: create and delete the installable form-submit trigger used to enforce limits after submissions.

The add-on does not request user email scope and does not send data to any external server.

## Suggested Review Setup

1. Create or open a Google Form.
2. Add a short-answer question named `Name`.
3. Add a dropdown question named `Dropdown slot` with choices `A`, `B`, and `C`.
4. Open `Form Capacity Guard` from the Google Forms add-on menu.
5. Approve the OAuth consent flow.

## Review Flow A: Total Response Limit

1. In the sidebar, enable total response limit.
2. Set maximum responses to `3`.
3. Keep auto-close enabled.
4. Save settings.
5. Submit three form responses from the respondent URL.
6. Confirm that after the third response the form stops accepting responses and shows the configured closed-form message.

Expected result:

- Settings save without error.
- Submit trigger is installed.
- The respondent-facing form closes after the configured total limit is reached.

Evidence from real test run `FCG-20260508-01`:

- FCG-001 passed: sidebar opened. Evidence: `screenshot-01-sidebar-overview.png`.
- FCG-002 passed: total response limit saved with limit `3`. Evidence: `screenshot-02-total-limit-settings.png`.
- FCG-003 passed: respondent-facing form closed after reaching the limit. Evidence: `screenshot-05-form-closed.png`.

## Review Flow B: Manual Check

1. With the form already at the configured response limit, reopen the form from the sidebar if needed.
2. Click the manual check action.
3. Confirm that the add-on reports the current count and reapplies the rule.

Expected result:

- The add-on reports `3/3` and closes the form again because the current response count still meets the configured limit.

Evidence from real test run `FCG-20260508-01`:

- FCG-004 passed. Evidence: `screenshot-fcg-004-manual-check.png`.

## Review Flow C: Dropdown Choice Capacity

1. Reopen the form.
2. Disable the total response limit or use a clean test form state for the choice-capacity test.
3. Enable choice capacity.
4. Enable the dropdown rule for `Dropdown slot`.
5. Set per-choice capacity to `1`.
6. Keep close-when-all-configured-choices-are-full enabled.
7. Submit responses selecting `A`, then `B`, then `C`, refreshing the respondent form after each enforcement.

Expected result:

- A filled dropdown choice is removed after it reaches capacity.
- When all configured choices are full, the form closes with the configured all-full message.

Evidence from real test run `FCG-20260508-01`:

- FCG-005 passed. Evidence:
  - `screenshot-03-choice-capacity-settings.png`
  - `screenshot-04-choice-removed.png`
  - `screenshot-fcg-005-all-choices-full-closed.png`

## Known Limitations

- Capacity checks run after form submission. Near-simultaneous submissions can briefly exceed a configured limit.
- Respondents who already loaded the form may need to refresh before seeing updated available choices.
- The real test run passed FCG-001 through FCG-011. FCG-001 through FCG-005 have saved screenshot evidence; FCG-006 through FCG-011 were later confirmed passed by the tester without additional screenshots.

## Data Handling

Form Capacity Guard:

- Reads and updates only the active Google Form.
- Stores settings in Apps Script document properties attached to the form.
- Does not send form data, response data, settings, analytics, or logs to external servers.
- Does not include advertising or tracking code.
