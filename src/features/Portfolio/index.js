import { Paragraph, Title, Wrapper } from "./styled";
import { ReactComponent as Logo } from "./githubLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories, selectStatus } from "../Homepage/homepageSlice";
import { Tiles } from "./Tiles";
import { Error } from "./Error";
import { Loader } from "./Loader";



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
          ? (<Loader />)
          : (status === "error"
            ? (<Error />)
            : (<Tiles />)
          )
      }
    </Wrapper>
  )
}