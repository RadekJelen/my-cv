import { Wrapper, Container, Title, Description, LinkLine, Link } from "./styled";

export const Tiles = () => (
  <Wrapper>
    <Container>
      <Title>Movies Browser</Title>
      <Description>
        Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.
      </Description>
      <div>
        <LinkLine>Demo: <Link href="https://link.demo.com" target="_blank" rel="noreferrer noopener">
          https://link.demo.com
        </Link>
        </LinkLine>
        <LinkLine>Code: <Link href="https://link.demo.com" target="_blank" rel="noreferrer noopener">
          https://link.demo.com
        </Link>
        </LinkLine>
      </div>
    </Container>
  </Wrapper>
)