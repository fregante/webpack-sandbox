#!/bin/bash
rm -rf dist-import dist-new-url
mkdir dist-import dist-new-url
webpack ./src/import.js --output-path dist-import | tee dist-import/log
webpack ./src/new-url.js --output-path dist-new-url | tee dist-new-url/log
