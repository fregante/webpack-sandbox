#!/bin/bash
rm -rf dist-import dist-new-url dist-import-mini-css-extract
mkdir dist-import dist-new-url dist-import-mini-css-extract
webpack ./src/import.js --output-path dist-import | tee dist-import/log
webpack ./src/new-url.js --output-path dist-new-url | tee dist-new-url/log

webpack ./src/import.js --config webpack-mini-css-extract.config.js --output-path dist-import-mini-css-extract | tee dist-import-mini-css-extract/log
