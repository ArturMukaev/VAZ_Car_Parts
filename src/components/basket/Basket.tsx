import React from 'react';
import {BasketCross, StyledBasket} from "./styled";
import {BasketPropsType} from "../../types/componentsTypes";
import {StyledHeadingBlack, StyledSvg, StyledTextBlack} from "../helpers";
import cross from "../../images/svg/cross.svg";
import BasketProducts from "./basket_products/BasketProducts";
import BasketForm from "./basket_form/BasketForm";

const Basket = ({isOpen, closeModal}: BasketPropsType): JSX.Element => (
    <StyledBasket
        isOpen={isOpen}
        contentLabel="Basket"
    >
        <div>
            <StyledHeadingBlack>Корзина</StyledHeadingBlack>
            <BasketCross onClick={closeModal}>
                <StyledSvg src={cross}/>
            </BasketCross>
        </div>
        <BasketProducts/>
        <BasketForm/>
        <StyledTextBlack>*Вся информация о заказе, включая его номер, будет выслана на указанную электронную
            почту.</StyledTextBlack>
    </StyledBasket>
);

StyledBasket.setAppElement('#root');

export default Basket;