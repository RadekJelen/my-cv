import styled, { keyframes } from "styled-components";

export const Text = styled.p`
  margin: 88px 0 48px;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.secondFont};
`;

const rotation = keyframes`
  0% { transform: none; }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  width: 160px;
  height: 160px;
  border: 14px solid ${({ theme }) => theme.colors.spinnerBorder};
  border-top-color: ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  animation-name: ${rotation};
  animation-duration: 1.0s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
