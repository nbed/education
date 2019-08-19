#!/bin/bash
set -e

npx tsc -w &
npx webpack --watch --config webpack.dev.js &
npx webpack-dev-server --open --config webpack.dev.js