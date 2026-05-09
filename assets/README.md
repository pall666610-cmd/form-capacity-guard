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

## Manifest URL

`logo-128.png` is committed in the public repository and is used by `appsscript.json`:

```text
https://raw.githubusercontent.com/pall666610-cmd/form-capacity-guard/main/assets/logo-128.png
```

This URL was verified over HTTPS before the manifest was updated.
