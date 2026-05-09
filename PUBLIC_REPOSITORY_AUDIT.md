# Public Repository Audit

Date: 2026-05-09

Scope: pre-public GitHub review for the Form Capacity Guard source folder.

Latest rerun: 2026-05-09, GitHub repository creation and public URL replacement phase.

## Result

The repository is close to publishable, but it should not be made public until the blockers below are resolved.

## Sensitive Information Scan

Checked text files for likely API keys, OAuth tokens, client secrets, private keys, emails, Google Forms URLs, Google Sheets URLs, placeholder URLs, and Google product logo usage.

Findings:

- No API keys, OAuth tokens, client secrets, private keys, passwords, or real support email addresses were found in text files.
- The previous real Google Form edit URL in `TEST_PLAN.md` and `workflow.md` has been redacted as `<redacted-test-form-edit-url>`.
- `appsscript.json` still references the Google Forms official product icon. This is acceptable only as a temporary local placeholder and must be replaced before Marketplace submission.
- Placeholder GitHub, support email, Apps Script, and Google Cloud values remain in release documents. These are intentional planning placeholders and must be replaced after the public repository and release accounts exist.

## Public Readiness Review

| Area | Status | Notes |
| --- | --- | --- |
| Source code | Ready with review | No external server calls or obvious secrets found. |
| README | Needs minor cleanup | Update test status and remove stale deferred wording. |
| Privacy Policy | Suitable as draft | Public contact path depends on GitHub Issues or selected support email. |
| Terms | Suitable as draft | Correctly discloses "as is" and overbooking limitation. |
| Security Policy | Needs contact update | Replace generic Marketplace contact with selected support email or GitHub Security Advisories. |
| Contributing | Suitable as draft | Keep OAuth/privacy impact requirement for PRs. |
| Marketplace docs | Needs URL completion | Public URLs, support email, and logo URL are still placeholders. |
| Screenshots | Needs privacy pass before commit | Current files appear to be test UI screenshots, but do one manual visual pass for account photos, emails, and private response data before publishing. |
| Logo | Started | `assets/logo-source.svg`, `assets/logo-32.png`, and `assets/logo-128.png` now exist. Public hosting is still pending. |

## Required Before `git init` / First Commit

1. Replace or redact the real Google Form edit URL in public files.
2. Confirm `assets/logo-32.png` and `assets/logo-128.png` are visually acceptable at small size.
3. Decide whether screenshots should live in the repo root or move to `assets/screenshots/`.
4. Manually inspect screenshots for account email, profile image, private form title, response content, or unrelated browser UI.
5. Choose `<github-owner>`, `<developer-name-or-organization>`, and `<support-email@example.com>`.
6. Confirm `LICENSE` copyright holder is the desired public name.
7. Run local syntax preflight again.
8. Confirm `.gitignore` excludes local Apps Script auth files and private evidence folders.

## Required After Public Repository Exists

1. Replace GitHub URL placeholders in release documents.
2. Replace support email placeholders.
3. Commit exported PNG logo files.
4. Update `appsscript.json` `addOns.common.logoUrl` to the public raw GitHub `logo-128.png` URL only after the raw URL opens successfully in a browser.
5. Create the final Apps Script version only after the custom logo URL is stable.

## Latest Audit Notes

- Public scan was rerun over Markdown, Apps Script, HTML, JSON, SVG, and text-like files.
- No API keys, OAuth tokens, private keys, passwords, or real support email addresses were found.
- No unredacted Google Forms edit URL was found in the current text scan.
- The only `script.google.com` match is the generic public Apps Script homepage link in `MARKETPLACE_SUBMISSION.md`, not a private project URL.
- Expected placeholders remain for GitHub owner, support email, developer name, Apps Script ID/version, and standard Cloud project ID.
- Expected temporary Google Forms product icon URL remains in `appsscript.json`; do not replace it until `assets/logo-128.png` has a real public HTTPS URL.
