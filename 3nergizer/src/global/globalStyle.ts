import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html body #root{
        height: 100%;
        width: 100%;
        
    }
    body{
        //font-family: 'Catamaran', sans-serif;
        font-family: 'Ubuntu', sans-serif;
        //font-family: "Jost", sans-serif;
    }
    button{
        outline: none;
        border: none;
    }
    a{
        outline: none;
        text-decoration: none;
    }
`;

export default GlobalStyle;