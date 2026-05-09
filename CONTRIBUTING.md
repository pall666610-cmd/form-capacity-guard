# Contributing

Thanks for helping improve Form Capacity Guard.

## Development flow

1. Fork the repository.
2. Make a focused change.
3. Test with a real Google Form in Apps Script.
4. Open a pull request with:
   - What changed.
   - How you tested it.
   - Any new OAuth scopes or privacy impact.

## Code standards

- Keep the add-on lightweight and understandable.
- Avoid external services unless they are essential and documented.
- Do not add analytics, tracking, or remote logging without an explicit privacy review.
- Keep OAuth scopes as narrow as possible.

## Testing checklist

- New form with no responses.
- Form that already has responses.
- Total response limit reaches the threshold.
- Multiple-choice, dropdown, and checkbox choice limits.
- Restore choices with "重新開啟表單".
- Disable limits and verify triggers are removed.
