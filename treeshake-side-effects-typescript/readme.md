# webpack treeshake side effects with TypeScript

Findings below. Exact copy of [treeshake-side-effects](../treeshake-side-effects), except it uses TypeScripts.

### Does TypeScript affect side effect detection?

Yes, 😐 but only when the export is not used at all.
