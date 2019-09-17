#!/bin/bash
set -e

output="prod"

# clean output
rm -rf $output
mkdir $output
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
cd ..

# improvement-frameworks
dir1="improvement-frameworks"
mkdir $dir1
cp -r ../www/dist/* $dir1
