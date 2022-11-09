import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode } from "../../features/ThemeSwitcher/themeSwitcherSlice";
import { useEffect } from "react";
import { fetchRepositories, selectStatus } from "../Homepage/homepageSlice";
import { Paragraph, Title, Wrapper } from "./styled";
import { ReactComponent as GithubLogo } from "./github_blue.svg";
import { Tiles } from "./Tiles";
import { Error } from "./Error";
import { Loader } from "./Loader";



export const Portfolio = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <Wrapper>
      <GithubLogo
        fill={darkMode ? "#2188FF" : "#0366D6"}
      />
      <Title>Portfolio</Title>
      <Paragraph>My recent projects</Paragraph>
      {
        status === "loading"
          ? (<Loader />)
          : (status === "error"
            ? (<Error />)
            : (<Tiles />)
          )
      }
    </Wrapper>
  )
}