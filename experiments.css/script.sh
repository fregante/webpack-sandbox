#!/bin/bash
rm -rf dist
mkdir dist
for file in src/*.js; do
	filename=$(basename "$file")
	webpack "./$file" --output-filename="$filename" | tee "dist/${filename%.js}.log"
done
prettier --write dist/*.js
