import styled from "styled-components";
import {StyledProductCard} from "../../../products/product_card/styled";
import {CountContainer, StyledHeadingBlack} from "../../../helpers";

export const StyledBasketCard = styled(StyledProductCard)`
  width: 550px;
  height: 70px;
  padding: 15px 10px;
  grid-template-columns: 70px 1fr;
  @media (max-width: 700px) {
    padding: 10px 5px;
    width: 325px;
  }
`;

export const BasketProductImage = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const BasketProductInfo = styled.div`
  display: grid;
  grid-template-areas: 
          "name name name"
          "price button total";
  grid-template-rows: 50px auto;
  grid-template-columns: 1fr 90px 1fr;
`;

export const BasketProductName = styled(StyledHeadingBlack)`
  grid-area: name;
  font-size: 20px;
  line-height: 23px;
  align-self: start;
  @media (max-width: 700px) {
    font-size: 16px;
    max-height: 50px;
    overflow: hidden;
  }
`;

export const BasketProductControls = styled.div`
  grid-area: button;
  display: grid;
  width: 90px;
  grid-template-columns: repeat(3, 30px);
`;

export const BasketProductCount = styled(CountContainer)`
  align-self: center;
  justify-self: center;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

export const BasketProductPrice = styled(StyledHeadingBlack)<{ isSale: boolean }>`
  grid-area: price;
  justify-self: start;
  font-size: 20px;
  color: ${(props) => (props.isSale ? 'red' : 'black')};
  @media (max-width: 700px) {
    font-weight: 400;
    font-size: 14px;
  }
`;

export const BasketProductTotal = styled(StyledHeadingBlack)<{ isSale: boolean }>`
  grid-area: total;
  justify-self: end;
  font-size: 24px;
  color: ${(props) => (props.isSale ? 'red' : 'black')};
  @media (max-width: 700px) {
    font-weight: 400;
    font-size: 14px;
    max-height: 30px;
    overflow: hidden;
    line-height: 14px;
  }
`;

export const StyledBasketProducts = styled.div`
  display: grid;
  grid-template-rows: auto 30px;
`;

export const BasketTotal = styled(StyledHeadingBlack)`
  font-size: 24px;
  justify-self: end;
`;