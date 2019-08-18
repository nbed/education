import { css } from "lit-element";

export const sharedStyles = css`

/* Global variables */
:host {
    /* section */
    --s1-color: #f79646;
    --s1-color-faded: #f7964655;
    --s2-color: #9e2cf5;
    --s2-color-faded: #9e2cf555;
    --s3-color: #3f902f;
    --s3-color-faded: #3f902f55;
    --s4-color: #1e79e4;
    --s4-color-faded: #1e79e455;

    /* section - neon */
    // --s1-color: #E6FB04;
    // --s1-color-faded: #E6FB04cc;
    // --s2-color: #FF3300;
    // --s2-color-faded: #FF3300cc;
    // --s3-color: #33FF00;
    // --s3-color-faded: #33FF00cc;
    // --s4-color: #FF0099;
    // --s4-color-faded: #FF0099cc;

    /* menu */
    --menu-color-selected: #eee;
    --menu-bg: #eee;
    --menu-bg-selected: rgba(0, 112, 192, 0.8);
    --menu-color-text: #333;
    --menu-header: rgba(255, 255, 255, 0.5);
}

body {
    font: 16px/1.25 arial, sans-serif;
    height: 100vh;
}

hr {
    width: 40%;
    text-align: left;
    position: absolute;
    border-top: 1px solid;
}

td {
    vertical-align: top;
}

ul {
    margin: 0.5em 0;
}

li {
    padding: 0 0 0.5em 0;
}

.block {
    margin: 1em 5em 1em 2em;
}

.fadeIn {
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}`