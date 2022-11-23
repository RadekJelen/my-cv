import styled from "styled-components";

export const ButtonLink = styled.a`
  background: ${({ theme }) => theme.colors.blue};
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonBorderHover};   
  }
  
  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
  }
`;