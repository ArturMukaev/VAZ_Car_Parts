import styled from "styled-components";

export const StyledHeader = styled.div`
  grid-area: header;
  display: grid;
  width: 100%;
  height: 180px;
  grid-template-rows: 80px 100px;
  @media (max-width: 1150px) {
    height: 80px;
    grid-template-rows: 80px;
  }
`;