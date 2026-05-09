# Security Policy

## Supported versions

The latest source code in the main branch is supported.

## Reporting a vulnerability

Please report security issues privately to linpoting5@gmail.com. You may also open a minimal public issue at https://github.com/pall666610-cmd/form-capacity-guard/issues, but do not include sensitive form data, private URLs, credentials, or exploit details in public issues.

## Security principles

- No external network calls are used by default.
- No form response data is stored outside the Google Form and its Apps Script project.
- OAuth scopes should remain limited to the active form, script UI, and trigger management. Do not add user identity scopes unless the code and privacy policy are updated first.
