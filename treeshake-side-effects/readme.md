# webpack treeshake side effects

Findings below.

### What's side-effect-free?

Array declarations are considered side-effect-free, but a plain `new Map()` isn't.

### Will Webpack drop side effects?

Side effects are not dropped.

### Does the behavior change between `import x from "dep"` and `import "dep"`?

The behavior is consistent regardless of import style.

### Will a unused `import x from "dep"` drop the side effects too?

No. `x` is dropped by "dep"’s side effects are still bundled.
