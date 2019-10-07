#!/bin/bash
set -e

output="dist"
build="build"

# clean output
rm -rf $output
mkdir $output

rm -rf $build

# build
npm run build

# copy files to output
set -x
cp -r "${build}/es5-bundled/." "${output}/"
