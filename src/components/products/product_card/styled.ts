import styled, {css} from "styled-components";
import {StyledHeadingBlack, StyledTextBlack} from "../../helpers";
import {Button} from "../../../controls/button/Button";

export const StyledProductCard = styled.div`
  display: grid;
  height: 170px;
  width: 600px;
  padding: 15px 20px;
  background: #FFFFFF;
  margin-bottom: 10px;
  justify-self: center;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  grid-template-columns: 120px 1fr;
  @media (max-width: 750px) and (min-width: 580px) {
    width: 450px;
  }
  @media (max-width: 580px) {
    grid-template-columns: 100px 1fr;
    height: 200px;
    width: 300px;
  }
`;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-areas: 
          "name name name"
          "manu manu manu"
          "price basket basket";

  @media (max-width: 580px) {
    grid-template-areas: 
          "name"
          "manu"
          "price"
          "basket";
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  @media (max-width: 580px) {
    width: 90px;
    height: 90px;
  }
`;

export const ProductName = styled(StyledHeadingBlack)<{ clickable: boolean }>`
  grid-area: name;
  font-size: 20px;
  line-height: 23px;
  @media (max-width: 580px) {
    font-size: 16px;
    max-height: 70px;
    overflow: hidden;
  }

  ${(props) =>
          props.clickable &&
          css`
            &:hover {
              cursor: pointer;
              color: blue;
            } `
  }
`;

export const ProductManufacturer = styled(StyledTextBlack)`
  grid-area: manu;
`;

export const ProductPrice = styled(StyledHeadingBlack)<{ isSale: boolean }>`
  grid-area: price;
  color: ${(props) => (props.isSale ? 'red' : 'black')};
`;

export const ProductBasket = styled(Button)`
  grid-area: basket;
  justify-self: end;
  @media (max-width: 580px) {
    justify-self: left;
  }
`;