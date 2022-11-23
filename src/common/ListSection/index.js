import { Line, List, Title, Wrapper } from "./styled";

const maxItemsList = 12;

export const ListSection = ({ title, items }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Line />
    <List longList={items.length > maxItemsList}>{items}</List>
  </Wrapper>
);