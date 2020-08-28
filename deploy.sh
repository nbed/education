#!/bin/bash
set -e

output="prod"

# clean output
rm -rf $output
mkdir $output

# Build
## build improvement-indicators
cd single-file
npm i
npm run build
cd ..

## build improvement-frameworks
cd www
npm i
npm run bundle
cd ..

cd $output

# portal
dir1="portal"
mkdir $dir1
cp -r ../portal .
cp ../index.html .
cp ../favicon.png .

# school-improvement-indicators
dir1="school-improvement-indicators"
mkdir $dir1
cp -r ../single-file/* ./$dir1
cd $dir1
mv "${dir1}.html" index.html
rm main-template.html # unneeded as it is a template
rm -rf node_modules
cd ..

# improvement-frameworks
dir1="improvement-frameworks"
mkdir $dir1
cp -r ../www/dist/* $dir1
