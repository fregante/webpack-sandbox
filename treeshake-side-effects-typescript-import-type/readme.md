# webpack treeshake side effects with TypeScript `import type`

Findings below. An extension of [treeshake-side-effects-typescript](../treeshake-side-effects-typescript)

### Does `import type` affect side effect detection?

No, webpack + typescript can drop the function implementation even without `import type`.

### Are dependencies used by the implementation also dropped?

Yes.

### Do the treeshaken dependencies affect compilation time?

Apparently not.
