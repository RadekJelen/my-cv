import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1216px;
margin: 72px auto;
padding: 32px;
background: ${({ theme }) => theme.colors.white};
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;

@media (max-width: 481px) {
    margin: 50px auto;
    padding: 16px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mineShaft};
  letter-spacing: 0.05em;
  line-height: 36px;

  @media (max-width: 481px) {
    font-size: 18px;
  }
`;

export const Icon = styled.img`
  height: 28px;
  @media (max-width: 481px) {
    height: 16px;
  }
`;

export const Line = styled.hr`
  margin-bottom: 32px;
  background: rgba(209, 213, 218, 0.3);
  height: 1px;
  border: none;

  @media (max-width: 481px) {
    margin-bottom: 12px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  grid-gap: 0 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  font-size: 18px;

  @media (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 481px) {
    grid-template-columns: 1fr;
    font-size: 14px;
  }
`;

export const Item = styled.li`
  margin: 2px 0px;
  &:before {
    content: "•";
    font-size: 24px;
    padding-right: 16px;
    color: ${({ theme }) => theme.colors.scienceBlue};

    @media (max-width: 481px) {
      font-size: 20px;
      padding-right: 8px;
    }
  }
`;