# Google Workspace Marketplace Submission Guide

This checklist prepares Form Capacity Guard for public Marketplace listing.

## 1. Prepare the open-source repository

- Create a public GitHub repository.
- Add `Code.gs`, `Sidebar.html`, `appsscript.json`, `README.md`, `LICENSE`, `PRIVACY.md`, `TERMS.md`, `CONTRIBUTING.md`, and `SECURITY.md`.
- Update maintainer name, support email, privacy URL, terms URL, and repository URL.
- Add screenshots or GIFs that accurately show the sidebar and settings flow.

## 2. Create the Apps Script project

1. Open [script.google.com](https://script.google.com/).
2. Create a new Apps Script project.
3. Copy the source files into the project.
4. Open Project Settings and enable `Show appsscript.json manifest file`.
5. Replace the manifest content with `appsscript.json`.
6. Test the add-on from a Google Form.

## 3. Use a standard Google Cloud project

Google says Apps Script add-ons cannot be published with the default Cloud project.

1. Create a standard Google Cloud project.
2. Enable the Google Workspace Marketplace SDK.
3. Link the Apps Script project to the standard Cloud project.
4. Configure the OAuth consent screen.

## 4. Configure OAuth

Use the same scopes in all three places:

- `appsscript.json`
- OAuth consent screen
- Google Workspace Marketplace SDK app configuration

Current scopes:

```text
https://www.googleapis.com/auth/forms.currentonly
https://www.googleapis.com/auth/script.container.ui
https://www.googleapis.com/auth/script.scriptapp
```

`userinfo.email` was removed because the current code doesn't read or display the user's email.

Scope justification:

- `forms.currentonly`: read and update only the active Google Form.
- `script.container.ui`: show the Forms editor menu and sidebar.
- `script.scriptapp`: create and delete the installable form submit trigger used for enforcement after submissions.

## 5. Create a version

For an Editor add-on, create an Apps Script version and record the version number.

1. Apps Script editor > Deploy > Manage deployments.
2. Create or update the deployment with a new version.
3. Use that version number in the Marketplace SDK.

## 6. Configure Marketplace SDK

Recommended initial settings:

- App type: Editor add-on.
- Host app: Google Forms.
- Visibility: Public.
- Installation: Individual install first; admin install can be added later if needed.
- Support URL: https://github.com/pall666610-cmd/form-capacity-guard/issues
- Privacy policy URL: https://github.com/pall666610-cmd/form-capacity-guard/blob/main/PRIVACY.md
- Terms of service URL: https://github.com/pall666610-cmd/form-capacity-guard/blob/main/TERMS.md

Important: Google warns that after saving the public/private visibility option, it cannot be changed later.

## 7. Review-readiness checklist

- Add-on is not a work in progress.
- The listing name does not misuse Google trademarks.
- The listing description matches the real features.
- Screenshots show the actual UI.
- Privacy policy link works and matches actual data handling.
- OAuth scopes match the app behavior.
- OAuth consent screen, Marketplace SDK, and `appsscript.json` list the same scopes.
- A custom logo is used instead of Google Forms product branding.
- Demo video is ready if OAuth verification asks for one.
- Test account or test instructions are ready for reviewers.
- `TEST_PLAN.md` has a completed test run with screenshots or notes.

## 8. Reviewer instructions

Use `MARKETPLACE_REVIEWER_INSTRUCTIONS.md` as the reviewer instruction draft.

Evidence to cite:

- `TEST_SUCCESS_REPORT.md`
- FCG-001 through FCG-005 passed with real Google Form screenshots.
- FCG-006 through FCG-011 are passed by tester confirmation without additional screenshots.

Important:

- Distinguish screenshot-backed evidence from tester-confirmed evidence in reviewer notes if needed.
- Before final public submission, decide whether the saved screenshots from FCG-001 through FCG-005 are enough or whether to capture additional screenshots for FCG-006 through FCG-011.

## 9. Known limitations to disclose

- Forms add-ons extend the Forms editor, not the respondent-facing form page.
- Choice removal happens after submission, so simultaneous submissions can briefly exceed a limit.
- Removed choices can be restored only if original choices were saved before enforcement.
- This Apps Script implementation is designed for lightweight usage.
