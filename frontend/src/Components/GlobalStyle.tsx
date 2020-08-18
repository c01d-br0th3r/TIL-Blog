import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;*/
        &:active {
            outline: none;
        }
    }
    body, html {
        padding: 0;
        margin: 0;
    }
    html {
        font-size: 1.8vw;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    a {
        color: inherit;
        text-decoration: none;
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
