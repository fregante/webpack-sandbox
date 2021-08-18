# webpack treeshake side effects

Questions:

- What's side-effect-free?
- Will Webpack drop side effects?
- Does the behavior change between `import x from "dep"` and `import "dep"`?

Answers:

- Array declarations are considered side-effect-free, but a plain `new Map()` isn't.
- Side effects are not dropped
- The behavior is consistent regardless of import style
