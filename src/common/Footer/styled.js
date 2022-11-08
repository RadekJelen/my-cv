import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
`;

export const LetsTalk = styled.p`
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.slateGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 12px;
  }
`;

export const Link = styled.a`
  margin-right: 24px;
  color: ${({ theme }) => theme.colors.mineShaft};
  transition: color 0.2s linear;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.lightModeBlue};
  }
`;

export const Email = styled.p`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mineShaft};
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
  color: ${({ theme }) => theme.colors.mineShaft};
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