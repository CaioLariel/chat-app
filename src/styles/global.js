import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .chat-container {
  display: flex;
  flex-direction: row; /* Alinhar lado a lado em telas maiores */
}

@media (max-width: 768px) {
  .chat-container {
    flex-direction: column; /* Alinhar verticalmente em telas menores */
  }
}

`;

export default GlobalStyle;
