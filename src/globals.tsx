import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
  }

  .lucide {
    color: ${(props) => props.theme.font.color.light};
    width: 1.75rem;
    height: 1.75rem;
    stroke-width: 1.5px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body * {
    font-family: 'Rubik', sans-serif !important;
    color: ${(props) => props.theme.font.color.light};
  }

  body a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
