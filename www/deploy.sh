#!/bin/bash
set -e

rm -rf prod
mkdir prod

cp -r dist prod
cp -r manifest prod
cp index.html prod
cp manifest.json prod
cp package.json prod

cd prod
npm i --only=production --silent
rm package.json
aws s3 sync ./ s3://brent2.monocl.mobi/ --acl public-read

echo "Deploy complete."
