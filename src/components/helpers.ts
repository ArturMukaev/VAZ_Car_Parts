import styled from "styled-components";
import {HandySvg} from 'handy-svg';
import {BasketState, ContextTypes} from "../types/contextTypes";


export const StyledSvg = styled(HandySvg)`
  width: 40px;
  height: 40px;
  align-self: center;
  transition: all .2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const StyledHeading = styled.div`
  align-self: center;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  cursor: default;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
`;

export const StyledHeading2 = styled(StyledHeading)`
  font-size: 16px;
  font-weight: 400;
`;

export const StyledHeadingBlack = styled(StyledHeading)`
  font-size: 27px;
  color: black;
  text-align: start;
`;

export const StyledTextBlack = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-align: start;
  align-self: center;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

export const CrossContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
`;

export const CountContainer = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;


export const initialBasketState: BasketState = {
    products: [],
    totalCount: 0,
    totalPrice: 0,
}

export const defaultContext: ContextTypes = {
    basketState: initialBasketState,
    addProduct: () => {},
    deleteProduct: () => {},
}

