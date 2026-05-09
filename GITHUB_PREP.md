# GitHub Repository Preparation

Use this checklist to understand the first public repository setup. The initial repository has been created and pushed.

## Initialize Locally

Before initializing or committing, complete the public readiness checklist in `PUBLIC_REPOSITORY_AUDIT.md`.

```powershell
git init
git add .
git commit -m "Initial Form Capacity Guard open-source release"
```

## Suggested Repository Settings

- Repository name: `form-capacity-guard`
- Visibility: Public.
- License: MIT.
- Issues: Enabled for support and bug reports.
- Discussions: Optional.
- Default branch: `main`.

## Publication Identity Decision

Recommended default choices:

| Field | Recommended value | Reason |
| --- | --- | --- |
| GitHub owner | `pall666610-cmd` | This owner is now part of every public URL. |
| Repository name | `form-capacity-guard` | Clear, kebab-case, product-name aligned. |
| Developer / publisher name | `Lin Po-Ting` | This appears on Marketplace and support surfaces. |
| Support email | `linpoting5@gmail.com` | Selected public support email for release documents. |

These four release identity values are now final for this repository setup phase.

## Required URL Updates

The repository has been created, and these files were updated with public URLs:

- `README.md`
- `PRIVACY.md`
- `TERMS.md`
- `SECURITY.md`
- `MARKETPLACE_SUBMISSION.md`
- `MARKETPLACE_FIELD_CHECKLIST.md`
- `MARKETPLACE_LISTING_DRAFT.md`

Use public URLs for:

- Application home page.
- Privacy Policy.
- Terms of Service.
- Support URL or GitHub Issues URL.
- Custom logo URL used by `appsscript.json`.

## Public URLs

| Purpose | Placeholder |
| --- | --- |
| Repository URL | `https://github.com/pall666610-cmd/form-capacity-guard` |
| Support URL | `https://github.com/pall666610-cmd/form-capacity-guard/issues` |
| Privacy Policy URL | `https://github.com/pall666610-cmd/form-capacity-guard/blob/main/PRIVACY.md` |
| Terms of Service URL | `https://github.com/pall666610-cmd/form-capacity-guard/blob/main/TERMS.md` |
| Security policy URL | `https://github.com/pall666610-cmd/form-capacity-guard/blob/main/SECURITY.md` |
| Logo URL | `https://raw.githubusercontent.com/pall666610-cmd/form-capacity-guard/main/assets/logo-128.png` |
| Support email | `linpoting5@gmail.com` |

Completed order:

1. Chose `pall666610-cmd`, `Lin Po-Ting`, and `linpoting5@gmail.com`.
2. Created the public repository.
3. Added `assets/logo-32.png`, `assets/logo-128.png`, and `assets/logo-source.svg`.
4. Replaced public URL placeholders in release docs and Marketplace fields.
5. Verified the raw GitHub logo URL.
6. Updated `appsscript.json` `logoUrl` to the raw GitHub logo URL.
7. Create the final Apps Script version only after the public logo URL remains stable.

## Safe First Git Sequence

Run these only after the public checklist passes and the identity fields above are final.

```powershell
git init
git branch -M main
git status --short
git add .
git status --short
git commit -m "Initial Form Capacity Guard open-source release"
git remote add origin https://github.com/pall666610-cmd/form-capacity-guard.git
git push -u origin main
```

Safety rules:

- Inspect `git status --short` before and after `git add .`.
- Do not commit `.clasp.json`, `.clasprc.json`, local credentials, private evidence folders, or unreviewed screenshots.
- Push only after the remote repository exists and the URL matches the chosen owner.
- Keep `appsscript.json` on the verified raw GitHub logo URL.

## Pre-Commit Public Checklist

- [ ] Review `PUBLIC_REPOSITORY_AUDIT.md`.
- [ ] Confirm no real Google Form edit URLs remain in public files.
- [ ] Confirm no API keys, OAuth tokens, private keys, or local `.clasp` auth files are present.
- [ ] Confirm screenshots do not show account emails, profile photos, private response data, or unrelated browser tabs.
- [ ] Confirm `assets/logo-source.svg` is custom and does not use Google product branding.
- [ ] Export and add `assets/logo-32.png` and `assets/logo-128.png`, or explicitly commit only the source SVG and keep PNG export as a release blocker.
- [ ] Confirm README, Privacy, Terms, Security, and Contributing are acceptable for public readers.

## Release Tag

Before Marketplace submission:

```powershell
git tag v0.4.0
git push origin main --tags
```

Only tag after:

- Apps Script syntax check passes.
- `TEST_PLAN.md` has one completed real test run.
- Screenshots match the submitted version.
- OAuth consent screen, Marketplace SDK, and `appsscript.json` scopes match.
