import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  background: #F1F7FF;
  box-sizing: border-box;
  border: 1px solid #3E74B0;
  @media (max-width: 1150px) {
    display: none;
  }

  a {
    text-decoration: none;
  }
`;