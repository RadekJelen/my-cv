import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto;
`;

export const LetsTalk = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.slateGray};
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
  margin: 24px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mineShaft};
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
`;

export const Paragraph = styled.p`
  max-width: 670px;
  margin-bottom: 56px;
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const Icons = styled.div`
  display: flex;
`;