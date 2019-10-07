# Education

An online version of New Brunswick's **School Improvement Indicators** document.

Reasons for being:

- more accessable
- simpler to use
- single source of truth (ie. one update and everyone's document is updated)

## Build and Run

For `single-file`, open in any web browser
For `www`, see README.md

## Site Deployment

1. Build `www` directory
2. `bash bundle.sh` which outputs the full site - portal, school-improvement-indicators, improvement-frameworks to `prod` directory
3. Copy this directory to the `nbed.github.io` repo under the nbed account
4. Commit and upload to `master` branch
5. Test changes at nbed.github.io

## Navigating the project

### `original-docs` directory

Contains the original document and predecessor HTML

- A useful tool for document-to-formatted-html: <https://html-online.com/editor/>

### `single-file` directory

This convention was chosed by the predecessor. One HTML file with all the CSS, Javascript, and HTML. The image assets are siblings.

### `www` directory

The framework improvement document using LitElement (lit-html) framework
