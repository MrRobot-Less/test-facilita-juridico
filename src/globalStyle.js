import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body{
    background-color: #232323 !important;
    font-family: 'Roboto Condensed', sans-serif !important;
  }
`;
 
export default GlobalStyle;