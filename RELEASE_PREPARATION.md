# Form Capacity Guard Release Preparation

Date: 2026-05-08

Status: release preparation after partial real Google Form test pass.

Current completion: 88%.

## 1. Marketplace, GitHub, OAuth Consistency Check

Current shared facts that must stay consistent across all release surfaces:

- Product name: `Form Capacity Guard`.
- Interface language: Traditional Chinese for the working add-on UI.
- Implementation: Google Apps Script Google Forms editor add-on.
- Host app: Google Forms.
- Data handling: reads and updates only the active Google Form; stores configuration in Apps Script document properties; does not send data to external servers.
- OAuth scopes:
  - `https://www.googleapis.com/auth/forms.currentonly`
  - `https://www.googleapis.com/auth/script.container.ui`
  - `https://www.googleapis.com/auth/script.scriptapp`
- Verified real tests: FCG-001 through FCG-011 passed.
- Evidence note: FCG-001 through FCG-005 have saved screenshot evidence; FCG-006 through FCG-011 are passed by tester confirmation without additional screenshots.
- Known limitation: capacity enforcement runs after submission, so near-simultaneous submissions can briefly exceed limits.

Current consistency result:

- `README.md`, `PRIVACY.md`, `TERMS.md`, `MARKETPLACE_LISTING_DRAFT.md`, `MARKETPLACE_SUBMISSION.md`, `MARKETPLACE_FIELD_CHECKLIST.md`, and `appsscript.json` are aligned on data access and OAuth scope intent.
- `appsscript.json` still uses a Google Forms official logo URL. This must be replaced before Marketplace submission.
- Public URL fields are not ready because the GitHub repository has not been created and a maintainer support email has not been selected.

## 2. Language Decision

Recommended release language strategy:

- Use Traditional Chinese as the primary language because the product UI and screenshots are Traditional Chinese.
- Keep concise English sections in Privacy Policy, Terms, and Marketplace listing to help Google reviewers and future international open-source users.
- Keep the product name in English: `Form Capacity Guard`.
- Avoid switching the working UI back to English unless all screenshots, README, listing copy, and test evidence are retaken.

Files updated for this strategy:

- `PRIVACY.md`: Traditional Chinese primary, English summary secondary.
- `TERMS.md`: Traditional Chinese primary, English summary secondary.
- `MARKETPLACE_LISTING_DRAFT.md`: Traditional Chinese listing copy plus English reviewer-friendly copy.

## 3. GitHub Public Repository URL Plan

Recommended repository:

- Repository name: `form-capacity-guard`
- Repository URL placeholder: `https://github.com/<github-owner>/form-capacity-guard`
- Issues URL placeholder: `https://github.com/<github-owner>/form-capacity-guard/issues`
- Privacy URL placeholder: `https://github.com/<github-owner>/form-capacity-guard/blob/main/PRIVACY.md`
- Terms URL placeholder: `https://github.com/<github-owner>/form-capacity-guard/blob/main/TERMS.md`
- Security URL placeholder: `https://github.com/<github-owner>/form-capacity-guard/blob/main/SECURITY.md`
- Logo URL placeholder: `https://raw.githubusercontent.com/<github-owner>/form-capacity-guard/main/assets/logo-128.png`

Before making the repository public, replace:

- `<github-owner>`
- `<support-email@example.com>`
- `<developer-name-or-organization>`
- `<apps-script-script-id>`
- `<apps-script-version-number>`
- `<standard-cloud-project-id>`

Support email recommendation:

- Use an email that can remain stable after publication, such as a project Gmail alias or a dedicated support address.
- Do not use a private personal email in screenshots or public docs unless intentionally chosen for public support.

## 4. Custom Logo Replacement Plan

Current manifest logo:

```text
https://www.gstatic.com/images/branding/product/1x/forms_48dp.png
```

Decision:

- This is a Google Forms official product icon and should not be used for the final Marketplace listing or OAuth consent screen.
- Replace it with a custom logo before Apps Script version creation and final screenshots.

Required assets:

- `assets/logo-source.svg`
- `assets/logo-32.png`
- `assets/logo-128.png`

Current status:

- `assets/logo-source.svg` is created.
- `assets/logo-32.png` and `assets/logo-128.png` have been exported.
- `appsscript.json` should not be changed to a placeholder URL. Keep the temporary local logo until the public `logo-128.png` URL exists.

Suggested visual direction:

- Simple form page outline.
- Capacity gauge, checkmark, or limit marker.
- Colors aligned with current UI: green `#0F9D58`, blue `#174EA6`, neutral `#202124`.
- No Google Forms icon, Google logo, or confusing Google product branding.

Manifest replacement after hosting:

```json
"logoUrl": "https://raw.githubusercontent.com/<github-owner>/form-capacity-guard/main/assets/logo-128.png"
```

Important:

- Use a public HTTPS URL.
- Retake or confirm OAuth/Marketplace screenshots after the logo is replaced if the logo appears in any reviewed flow.

## 5. Google Cloud, OAuth, Marketplace Actual Fill Checklist

Google Cloud standard project:

- Project name: `Form Capacity Guard`
- Project ID: `<standard-cloud-project-id>`
- Owner/publisher: `<developer-name-or-organization>`
- Enabled API: Google Workspace Marketplace SDK
- Linked Apps Script project: `<apps-script-script-id>`

OAuth consent screen:

- User type: External
- Publishing status: Production before public Marketplace review
- App name: `Form Capacity Guard`
- User support email: `<support-email@example.com>`
- App logo: custom logo URL, not Google Forms logo
- Application home page: GitHub repository URL
- Privacy Policy URL: GitHub `PRIVACY.md` public URL
- Terms of Service URL: GitHub `TERMS.md` public URL
- Authorized domains: domains used by GitHub/project/support URLs
- Developer contact information: `<support-email@example.com>`
- Scopes: exactly the same three scopes as `appsscript.json`
- Demo video: prepare if OAuth verification asks for it

Google Workspace Marketplace SDK:

- App type: Editor add-on
- Host app: Google Forms
- Visibility: Public only after final confirmation
- Installation: Individual install first
- Forms add-on script ID: `<apps-script-script-id>`
- Forms add-on script version: `<apps-script-version-number>`
- App name: `Form Capacity Guard`
- Short description: use the Traditional Chinese or English version from `MARKETPLACE_LISTING_DRAFT.md`
- Detailed description: use `MARKETPLACE_LISTING_DRAFT.md`
- Category: Productivity or Business Tools
- Pricing: Free
- Developer name: `<developer-name-or-organization>`
- Developer website: GitHub repository URL or project site
- Support URL: GitHub Issues URL or support page
- Privacy Policy URL: public `PRIVACY.md` URL
- Terms of Service URL: public `TERMS.md` URL
- Screenshots: use tested-version screenshots listed in `TEST_SUCCESS_REPORT.md`
- Icons: custom 32px and 128px icons
- OAuth scopes: exactly the same three scopes as `appsscript.json`
- Reviewer instructions: use `MARKETPLACE_REVIEWER_INSTRUCTIONS.md`

## 6. Reviewer Instructions Summary

Use `MARKETPLACE_REVIEWER_INSTRUCTIONS.md` as the Marketplace reviewer instruction draft.

Reviewer evidence should cite:

- `TEST_SUCCESS_REPORT.md`
- `screenshot-01-sidebar-overview.png`
- `screenshot-02-total-limit-settings.png`
- `screenshot-05-form-closed.png`
- `screenshot-fcg-004-manual-check.png`
- `screenshot-03-choice-capacity-settings.png`
- `screenshot-04-choice-removed.png`
- `screenshot-fcg-005-all-choices-full-closed.png`

Important wording:

- FCG-001 through FCG-011 passed.
- FCG-001 through FCG-005 have saved screenshot evidence.
- FCG-006 through FCG-011 are tester-confirmed passed without additional screenshots.

## 7. Skill Decision

Decision: still wait before creating the global `google-workspace-marketplace-addon-release` Skill.

Reason:

- The functional test set is now passed, but the release workflow still has unresolved external setup: public GitHub URLs, custom logo, OAuth consent screen, Marketplace SDK, Apps Script versioning, and review feedback.
- Creating the Skill after at least one full release setup loop will make it more useful and less speculative.

Recommended creation point:

- Create the Skill after custom logo, public URLs, OAuth consent screen, Marketplace SDK setup, and at least one full Marketplace submission or reviewer-feedback loop.

Rules to include later:

- Keep UI language, screenshots, listing language, Privacy, and Terms aligned before submission.
- Never use Google official product icons as a custom Marketplace logo.
- Keep manifest, OAuth consent, and Marketplace SDK scopes identical.
- Keep screenshot-backed evidence and tester-confirmed evidence explicitly separate.
- Use reviewer instructions that point to actual evidence files, not undocumented claims.

## 8. Remaining Release Blockers

- Create public GitHub repository.
- Choose support email.
- Host custom logo assets through the public repository.
- Replace `appsscript.json` `logoUrl`.
- Host Privacy, Terms, Support, and logo URLs publicly.
- Create standard Google Cloud project.
- Configure OAuth consent screen.
- Configure Marketplace SDK.
- Create Apps Script version.
- Decide whether to capture additional screenshots for FCG-006 through FCG-011 before submission.
- Prepare demo video if OAuth verification requests it.
- Submit OAuth verification.
- Submit Marketplace review.
