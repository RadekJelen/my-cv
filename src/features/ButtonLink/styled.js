import styled from "styled-components";

export const ButtonLink = styled.button`
  background: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  text-decoration: none;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  &:hover {
    box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
  }
  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }
`;