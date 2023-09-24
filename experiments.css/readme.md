# experiments.css

I'm looking to replace the `mini-css-extract-plugin` with `experiments.css` but its behavior is dependent on the way the CSS files are imported.

Tracking PRs:

- https://github.com/webpack/webpack/issues/14893

## Results

- `import "./style.css"` will attempt to load the file
- `import stylesheet from "./style.css" asset { type: "css" }` fails
- `new  URL("./style.css", import.meta.url)` works as expected, but I shouldn't be required to change the way I import the files
