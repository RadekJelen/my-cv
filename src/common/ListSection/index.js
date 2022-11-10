import { Line, List, Title, Wrapper } from "./styled";

export const ListSection = ({ title, items }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Line />
    <List longList={items.length > 12 ? true : false}>{items}</List>
  </Wrapper>
)