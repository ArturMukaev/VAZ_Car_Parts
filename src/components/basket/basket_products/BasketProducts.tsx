import React from 'react';
import {BasketItem, ContextTypes} from "../../../types/contextTypes";
import {BasketContext} from "../../../App";
import BasketProductCard from "./basket_product_card/BasketProductCard";
import {StyledHeadingBlack} from "../../helpers";
import {BasketTotal, StyledBasketProducts} from "./basket_product_card/styled";

const BasketProducts = (): JSX.Element => {
    const {basketState} = React.useContext<ContextTypes>(BasketContext);

    return (
        <StyledBasketProducts>
            <div>
                {
                    basketState.products.length
                        ? basketState.products.map(((element: BasketItem) => (
                            <BasketProductCard key={element.id} {...element}/>
                        )))
                        : <StyledHeadingBlack>Товаров нет</StyledHeadingBlack>
                }
            </div>
            <BasketTotal>Итого: {basketState.totalPrice} руб.</BasketTotal>
        </StyledBasketProducts>
    );
};

export default BasketProducts;
