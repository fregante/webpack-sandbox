# Destructuring support via DefinePlugin

Context: https://github.com/webpack/webpack/issues/14800#issuecomment-1463385308

## Findings

- `process.env` is replaced if defined in its entirety
- `process.env.NAME` is replaced

## Notes

Specifying `process.env` in its entirety is not what the docs suggest and is arguably bad under every metric.

https://webpack.js.org/plugins/define-plugin/
