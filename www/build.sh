#!/bin/bash
set -e

# compile code
npx tsc

# compile scripts and replace links
cd scripts
npx tsc
node generate-links

# build output
cd ..
npx polymer build
