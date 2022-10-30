import { Paragraph, Title, Wrapper } from "./styled";
import { ReactComponent as Logo } from "./githubLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectStatus } from "../Homepage/homepageSlice";
import { Tiles } from "./Tiles";
import { useEffect } from "react";


export const Portfolio = () => {
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <Wrapper>
      <Logo />
      <Title>Portfolio</Title>
      <Paragraph>My recent projects</Paragraph>
      {
        status === "loading"
          ? (<p>loading</p>)
          : (status === "error"
            ? (<p>error</p>)
            : (<Tiles />)
          )
      }
    </Wrapper>
  )
}