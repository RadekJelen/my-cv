import styled from "styled-components";
import { ButtonLink } from "../ButtonLink/styled";
import { ReactComponent as message } from "./message.svg";

export const Wrapper = styled.header`
  max-width: 1216px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 398px;
  border-radius: 100%;
`;

export const ThisIs = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 130%;
`;

export const Name = styled.h1`
  margin: 12px 0;
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.mineShaft};
  letter-spacing: 0.05em;
`;

export const Paragraph = styled.p`
  margin: 32px 0;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const Button = styled(ButtonLink)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(message)`
  margin-right: 16px;
`;