import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
     box-sizing:border-box;
     padding:0;
     margin:0;
    }

    ul , ol {
        list-style: none;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: 0;
    }
`;
