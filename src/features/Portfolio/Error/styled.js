import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 88px;
  padding-bottom: 12px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.secondFont};
  font-size: 24px;
  line-height: 29px;
`;

export const Text = styled.p`
  margin: 32px 0;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.secondFont};
`;