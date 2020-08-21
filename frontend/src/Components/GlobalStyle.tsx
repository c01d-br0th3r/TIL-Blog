import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;*/
        &:active {
            outline: none;
        }
    }
    li {
        all: unset;
    }
    body, html {
        padding: 0;
        margin: 0;
    }
    html {
        font-size: 1.8vw;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    h2 {
        margin: 1.2em 0;
        font-weight: 600;
    }
    a {
        color: inherit;
        text-decoration: none;
        margin: 0 0.1em;
        &:hover {
            color: inherit;
            cursor: pointer;
            text-decoration: none;
        }
    }
    @media (min-width: 1024px) {
        html {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        html {
            font-size: 14px;
        }
    }
`;

export default GlobalStyle;
