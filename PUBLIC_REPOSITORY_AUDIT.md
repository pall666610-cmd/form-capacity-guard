# Public Repository Audit

Date: 2026-05-09

Scope: pre-public GitHub review for the Form Capacity Guard source folder.

Latest rerun: 2026-05-09, GitHub repository creation and public URL replacement phase.

## Result

The repository is public and publishable for the current open-source preparation phase. Remaining placeholders are limited to external Google release setup values that do not exist yet, such as Apps Script version and standard Cloud project ID.

## Sensitive Information Scan

Checked text files for likely API keys, OAuth tokens, client secrets, private keys, emails, Google Forms URLs, Google Sheets URLs, placeholder URLs, and Google product logo usage.

Findings:

- No API keys, OAuth tokens, client secrets, private keys, or passwords were found in text files.
- The selected public support email is `linpoting5@gmail.com`.
- The previous real Google Form edit URL in `TEST_PLAN.md` and `workflow.md` has been redacted as `<redacted-test-form-edit-url>`.
- `appsscript.json` now uses the public raw GitHub custom logo URL for `assets/logo-128.png`.
- GitHub owner, repository, support email, developer name, public policy URLs, support URL, and logo URL have been replaced with live public values.
- Apps Script version and standard Google Cloud project placeholders remain intentionally unresolved until those external setup steps exist.

## Public Readiness Review

| Area | Status | Notes |
| --- | --- | --- |
| Source code | Ready with review | No external server calls or obvious secrets found. |
| README | Ready with review | Public repository, support, Privacy, Terms, Security, and support email are listed. |
| Privacy Policy | Suitable as draft | Contact path points to GitHub Issues and the selected support email. |
| Terms | Suitable as draft | Correctly discloses "as is" and overbooking limitation. |
| Security Policy | Ready with review | Private vulnerability contact uses the selected support email. |
| Contributing | Suitable as draft | Keep OAuth/privacy impact requirement for PRs. |
| Marketplace docs | Ready for next setup phase | Public URLs, support email, developer name, and logo URL are filled. Apps Script and Cloud project values remain future setup fields. |
| Screenshots | Ready with review | Manual visual privacy pass found no account email, profile photo, customer data, or response contents. |
| Logo | Ready | `assets/logo-source.svg`, `assets/logo-32.png`, and `assets/logo-128.png` exist and `logo-128.png` is publicly available through raw GitHub. |

## Required Before `git init` / First Commit

1. Replace or redact the real Google Form edit URL in public files.
2. Confirm `assets/logo-32.png` and `assets/logo-128.png` are visually acceptable at small size.
3. Decide whether screenshots should live in the repo root or move to `assets/screenshots/`.
4. Manually inspect screenshots for account email, profile image, private form title, response content, or unrelated browser UI.
5. Choose `pall666610-cmd`, `Lin Po-Ting`, and `linpoting5@gmail.com`.
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
- No API keys, OAuth tokens, private keys, or passwords were found.
- No unredacted Google Forms edit URL was found in the current text scan.
- The only `script.google.com` match is the generic public Apps Script homepage link in `MARKETPLACE_SUBMISSION.md`, not a private project URL.
- No GitHub owner, support email, developer name, or Google Forms official icon placeholders remain.
- Expected placeholders remain only for Apps Script ID/version and standard Cloud project ID.
- Raw logo URL verification passed: `https://raw.githubusercontent.com/pall666610-cmd/form-capacity-guard/main/assets/logo-128.png` returned `200 OK` with `Content-Type: image/png`.
