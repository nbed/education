#!/bin/bash
set -e

npx tsc -w &
npx webpack --watch &
npx webpack-dev-server --open