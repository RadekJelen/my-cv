import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 120px;
`;

export const LetsTalk = styled.p`
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 12px;
  }
`;

export const Link = styled.a`
  margin-right: 24px;
  color: ${({ theme }) => theme.colors.secondFont};
  transition: 0.5s;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Email = styled.p`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondFont};
  margin: auto;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  max-width: 600px;
  margin: 24px 0 48px;
  color: ${({ theme }) => theme.colors.secondFont};
  font-size: 18px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
    margin: 12px 0 40px;
  }
`;

export const Icons = styled.div`
  display: flex;
`;