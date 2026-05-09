# Form Capacity Guard Assets

This folder holds custom Marketplace and OAuth consent assets.

## Logo Files

Planned files:

| File | Purpose | Status |
| --- | --- | --- |
| `logo-source.svg` | Editable custom source logo. Does not use Google Forms branding. | Created |
| `logo-32.png` | 32x32 icon for Marketplace/OAuth surfaces that require PNG. | Exported |
| `logo-128.png` | 128x128 icon for Apps Script manifest and Marketplace listing. | Exported |

## Export Rules

- Export from `logo-source.svg`.
- Keep a transparent or clean light background depending on the Marketplace upload requirement.
- Verify readability at 32px before using it in OAuth consent or Marketplace SDK.
- Do not use Google Forms, Google Workspace, or other Google product icons.

## Manifest URL Plan

Keep `appsscript.json` unchanged until `logo-128.png` exists in a public repository.

After the public repository is created and the PNG is committed, replace the temporary Google Forms icon URL with:

```text
https://raw.githubusercontent.com/<github-owner>/form-capacity-guard/main/assets/logo-128.png
```

Do not use this placeholder in `appsscript.json`. Update the manifest only after the raw GitHub URL is real and opens successfully over HTTPS.
