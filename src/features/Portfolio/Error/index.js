import { ButtonLink } from "../../../common/ButtonLink/styled";
import { ReactComponent as DangerIcon } from "./danger.svg";
import { Text, Title, Wrapper } from "./styled";

export const Error = () => (
  <Wrapper>
    <DangerIcon width={37} />
    <Title>Ooops! Something went wrong... </Title>
    <Text>
      Sorry, failed to load Github projects.<br />You can check them directly on Github.
    </Text>
    <ButtonLink
      href="https://github.com/RadekJelen"
      title="https://github.com/RadekJelen"
      target="_blank"
      rel="noreferrer noopener"
    >
      Go to Github
    </ButtonLink>
  </Wrapper>
)