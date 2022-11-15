import { ReactComponent as Sun } from "./sun.svg";
import { Icon, Switcher, SwitcherArea, SwitcherText } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleTheme } from "./themeSwitcherSlice";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  return (
    <SwitcherArea onClick={() => dispatch(toggleTheme())}>
      <SwitcherText>Dark mode {darkMode ? "on" : "off"}</SwitcherText>
      <Switcher>
        <Icon darkMode={darkMode}>
          <Sun fill={darkMode ? "#252525" : "#FFFFFF"} />
        </Icon>
      </Switcher>
    </SwitcherArea>
  );
};