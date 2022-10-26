import { Line, List, Title, Wrapper } from "./styled";

export const ListSection = ({ title, items }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Line />
    <List>{items}</List>
  </Wrapper>
)