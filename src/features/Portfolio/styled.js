import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1216px;
  margin: 0 auto 140px;
  text-align: center;

  
  @media (max-width: 481px) {
    margin-bottom: 48px;
  }
`;

export const Title = styled.h2`
  margin: 12px 0 8px;
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0.05em;

  @media (max-width: 481px) {
    margin: 0;
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.mineShaft};
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;

  @media (max-width: 481px) {
    font-size: 17px;
  }
`;