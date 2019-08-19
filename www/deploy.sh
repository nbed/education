#!/bin/bash
set -e

output="dist"
build="build"

# clean output
rm -rf $output
mkdir $output

rm -rf $build

# build
npx tsc
npx webpack --config webpack.prod.js

# copy files to output
# files
cp ./index.html ./$output/index.html
cp ./manifest.json ./$output/manifest.json
# directories
cp ./$build ./$output/$build -r
mkdir $output/node_modules
cp ./node_modules/@webcomponents ./$output/node_modules/@webcomponents -r
cp ./manifest ./$output/manifest -r
