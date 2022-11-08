import { ThemeProvider } from 'styled-components';
import Homepage from './features/Homepage';
import { GlobalStyle } from './GlobalStyle';
import {theme} from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
