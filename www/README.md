# start-lit-element

A simple Hello World for LitElement.

https://start-lit-element.firebaseapp.com/

* [Quick start](#quick-start)
* [Detailed setup info](#detailed-setup-info)
* [Browser compatibility and performance](#browser-compatibility-and-performance)

## Quick start

```
npm install
npm run build
npm run serve

Manual build:
npm run build

Hot reload:
npm run watch

Build of IE 11:
npx tsc --p tsconfig-ie.json && npx webpack --config webpack.ie.js

```

### Start a dev server

```
npm run serve
```

### Build for production and serve locally

### Deploy

TODO: build deploy script

## Browser compatibility and performance

TODO: Perform Lighthouse audits and test on the most recent versions of Chrome, Safari, Firefox, and Edge.

## Known issues

(All browsers) Dynamic `import` warning:

```
Could not resolve module specifier "require" in file "..src/start-lit-element.js".
```

See https://github.com/Polymer/tools/issues/131.

(IE11 and Edge) Warning due to `<!--!` in built HTML:

```
Unexpected character: U+0021 EXCLAMATION MARK (!)
Unexpected character in comment end. Expected "-->"
```

See https://github.com/Polymer/polymer-cli/issues/779.
