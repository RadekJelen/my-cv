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
    background-color: ${({ theme }) => theme.colors.whiteLilac};
    padding: 110px 16px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.slateGray};
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      padding: 32px 16px;
    }
  }
`;