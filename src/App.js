import { ThemeProvider } from 'styled-components';
import Homepage from './features/Homepage';
import { GlobalStyle } from './GlobalStyle';
import { useSelector } from "react-redux";
import { selectDarkMode } from "./features/ThemeSwitcher/themeSwitcherSlice";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
