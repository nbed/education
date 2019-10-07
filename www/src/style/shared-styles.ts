import { css } from "lit-element";

const CUSTOM_THEME = "custom-theme-name";

export let isLightTheme = true;

function setTheme(theme: string) {
    isLightTheme = theme === "light";
    console.log(`Setting ${theme} theme`);
    window.localStorage.setItem(CUSTOM_THEME, isLightTheme ? "light" : "dark");
}

// read theme from local storage
if (window.localStorage) {
    let s = window.localStorage;
    if (s.getItem(CUSTOM_THEME)) {
        let currentTheme = s.getItem(CUSTOM_THEME)!;
        setTheme(currentTheme);
    }
}

export function toggleTheme() {
    console.log("isLightTheme: " + isLightTheme);
    setTheme(isLightTheme ? "dark" : "light");
    window.location.reload();
}

const lightTheme = css`
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

        /* menu */
        --menu-bg: #eee;
        --menu-bg-selected: rgba(0, 112, 192, 0.8);
        --menu-color-selected: #eee;
        --menu-color-text: #333;
        --menu-nav-bg: #fffb;

        /* tab */
        --tab-color: white;
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
    }`;

const darkTheme = css`
    ${lightTheme}
    /* Global variables */
    :host {
        color: white;
        background-color: #17181c;

        /* menu */
        --menu-bg: #222;
        --menu-nav-bg: #17181cbb;
        --menu-color-text: white;

        /* tab */
        --tab-color: #17181c;
    }`;

export const sharedStyles = css`${ isLightTheme ? lightTheme : darkTheme }`