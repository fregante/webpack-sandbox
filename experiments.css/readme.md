# experiments.css

I'm looking to replace the `mini-css-extract-plugin` with `experiments.css` but its behavior is dependent on the way the CSS files are imported.

Tracking PRs:

- https://github.com/webpack/webpack/issues/14893
- https://github.com/webpack/webpack/issues/17700

## Results

- `import "./style.css"` will attempt to load the file
- `new  URL("./style.css", import.meta.url)` won't load the file, but it does not merge the stylesheets

## Expectations

- See the [dist-import-mini-css-extract](./dist-import-mini-css-extract) folder: `main.css` is generated and `main.js` is completely empty
