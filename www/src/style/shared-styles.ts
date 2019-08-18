import { css } from "lit-element";

export const sharedStyles = css`
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