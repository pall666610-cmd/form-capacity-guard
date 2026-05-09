# Security Policy

## Supported versions

The latest source code in the main branch is supported.

## Reporting a vulnerability

Please report security issues privately to the maintainer email listed in the Marketplace listing. If no private contact is available yet, create a GitHub issue with a minimal description and avoid including sensitive form data.

## Security principles

- No external network calls are used by default.
- No form response data is stored outside the Google Form and its Apps Script project.
- OAuth scopes should remain limited to the active form, script UI, and trigger management. Do not add user identity scopes unless the code and privacy policy are updated first.
