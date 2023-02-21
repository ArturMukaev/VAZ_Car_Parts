import styled from "styled-components";

export const StyledCategory = styled.div`
  display: grid;
  width: 200px;
  height: 100px;
  align-content: center;
  justify-content: center;
  justify-self: center;
  text-align: center;
  background: #F4F4F4;
  border: 1px solid #000000;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  @media (max-width: 580px) {
    width: 140px;
    margin: 10px 2.5px;
  }
`;

export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1400px) and (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const StyledHeading = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  @media (max-width: 580px) {
    font-size: 20px;
  }
`;