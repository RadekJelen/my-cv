import { useSelector } from "react-redux";
import { selectRepositories } from "../../Homepage/homepageSlice";
import { TilesWrapper, Tile, Title, Description, LinkLine, Link } from "./styled";

export const Tiles = () => {
  const repositories = useSelector(selectRepositories);

  return (
    <TilesWrapper>
      {repositories.map(repo => (
        <Tile key={repo.id}>
          <Title>{repo.name}</Title>
          <Description>{repo.description}</Description>
          <LinkLine>
            Link to:{" "}
            <Link
              href={`https://${repo.owner.login}.github.io/${repo.name}`}
              title={`https://${repo.owner.login}.github.io/${repo.name}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              demo
            </Link>
          </LinkLine>
          <LinkLine>
            Link to:{" "}
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              code
            </Link>
          </LinkLine>
        </Tile>
      ))}
    </TilesWrapper>
  )
}