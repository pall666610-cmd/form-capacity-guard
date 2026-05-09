# Marketplace Field Checklist

Use this checklist when configuring the standard Google Cloud project, OAuth consent screen, and Google Workspace Marketplace SDK.

## Google Cloud Project

| Field | Current recommendation |
| --- | --- |
| Project name | Form Capacity Guard |
| Project ID | Choose a stable lowercase ID, for example `form-capacity-guard` if available |
| Billing | Enable if Google requires it for publishing or verification |
| APIs | Google Workspace Marketplace SDK |
| Apps Script link | Link the Apps Script project to this standard Cloud project |
| Owner/publisher account | Use the account that will maintain the Marketplace listing |

Fields to record after setup:

| Field | Value |
| --- | --- |
| Standard Cloud project ID | `<standard-cloud-project-id>` |
| Apps Script script ID | `<apps-script-script-id>` |
| Apps Script version number | `<apps-script-version-number>` |
| Developer name / organization | `<developer-name-or-organization>` |
| Support email | `<support-email@example.com>` |

## OAuth Consent Screen

| Field | Current recommendation |
| --- | --- |
| User type | External for public Marketplace listing |
| Publishing status | Production before public review |
| App name | Form Capacity Guard |
| User support email | Maintainer support email |
| App logo | Custom logo, not a Google Forms product icon |
| Application home page | Public GitHub repository or project site |
| Privacy Policy URL | Public URL for `PRIVACY.md` |
| Terms of Service URL | Public URL for `TERMS.md` |
| Authorized domains | Domains used by home page, privacy policy, terms, and support URLs |
| Developer contact information | Maintainer email |
| Scopes | `forms.currentonly`, `script.container.ui`, `script.scriptapp` |
| Scope justification | Read/update only the active form, show sidebar UI, and create/delete the installable form submit trigger |
| Demo video | Show installation, sidebar setup, consent flow, total limit, choice limit, reopen, and disable |

Actual URLs to fill:

| Field | URL |
| --- | --- |
| Application home page | `https://github.com/<github-owner>/form-capacity-guard` |
| Privacy Policy URL | `https://github.com/<github-owner>/form-capacity-guard/blob/main/PRIVACY.md` |
| Terms of Service URL | `https://github.com/<github-owner>/form-capacity-guard/blob/main/TERMS.md` |
| Support URL | `https://github.com/<github-owner>/form-capacity-guard/issues` |
| Logo URL | `https://raw.githubusercontent.com/<github-owner>/form-capacity-guard/main/assets/logo-128.png` |

## Google Workspace Marketplace SDK

| Field | Current recommendation |
| --- | --- |
| App visibility | Public, only after confirming because visibility choice is permanent |
| App integration | Editor add-on |
| Host app | Google Forms |
| Forms add-on script ID | Apps Script project script ID |
| Forms add-on script version | Version number created in Apps Script, for example `1`, not `1.0` |
| Installation | Individual install first |
| App name | Form Capacity Guard |
| Short description | Limit Google Forms responses and automatically hide full choices. |
| Detailed description | Use `MARKETPLACE_LISTING_DRAFT.md`, updated after testing |
| Category | Productivity or Business Tools, depending on Marketplace options available |
| Pricing | Free |
| Developer name | Maintainer or organization name |
| Developer website | Public project or maintainer website |
| Support URL | GitHub Issues or support page |
| Privacy Policy URL | Public URL for `PRIVACY.md` |
| Terms of Service URL | Public URL for `TERMS.md` |
| Screenshots | Actual tested sidebar and closed-form behavior |
| Icons | Custom 32px and 128px icons; do not use Google product branding |
| OAuth scopes | Same as manifest and OAuth consent screen |
| Reviewer instructions | Explain how to create a test form, open the add-on, set limits, submit responses, and verify closure/restoration |

Reviewer instructions source:

- Use `MARKETPLACE_REVIEWER_INSTRUCTIONS.md`.
- Cite `TEST_SUCCESS_REPORT.md`.
- State clearly that FCG-001 through FCG-011 passed. FCG-001 through FCG-005 have saved screenshot evidence; FCG-006 through FCG-011 are tester-confirmed without additional screenshots.

Asset preparation source: see `MARKETPLACE_ASSETS.md`.

## Current Scope Decision

Keep:

- `https://www.googleapis.com/auth/forms.currentonly`: required to read responses, update choices, set closed message, and stop/start response collection for the active form.
- `https://www.googleapis.com/auth/script.container.ui`: required for the Forms editor sidebar and add-on menu.
- `https://www.googleapis.com/auth/script.scriptapp`: required to create and delete the installable form submit trigger.

Removed:

- `https://www.googleapis.com/auth/userinfo.email`: the current code does not read or display the user's email.
