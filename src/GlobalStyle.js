import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  body {
    word-break: break-word;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 32px 16px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.mainFont};
    letter-spacing: 0.05em;
  }
`;