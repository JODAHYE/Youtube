import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body, * {
        overflow: hidden;
        font-size: 14px;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    button{
        cursor: pointer;
        outline: none;
        border: none;
        background: #fff;
    } 
    input, textarea{
        outline: none;
        border: none;
    }
    a{
        text-decoration: none;
    }
`;
export default GlobalStyle;
