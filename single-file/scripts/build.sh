#!/bin/bash
set -ex

cd ..

rm -f school-improvement-indicators.html
cp main-template.html school-improvement-indicators.html

cd scripts

npx tsc
node generate-links
