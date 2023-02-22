import React from 'react';
import {BasketItem, ContextTypes} from "../../../../types/contextTypes";
import {BasketContext} from "../../../../App";
import {
    BasketProductControls,
    BasketProductCount,
    BasketProductImage,
    BasketProductInfo,
    BasketProductName,
    BasketProductPrice,
    BasketProductTotal,
    StyledBasketCard
} from "./styled";
import {Button} from "../../../../controls/button/Button";

const BasketProductCard = (props: BasketItem): JSX.Element => {
    const {picture, price, name, isSale, count} = props;
    const {addProduct, deleteProduct} = React.useContext<ContextTypes>(BasketContext);
    const priceWithSale = isSale ? Number((price * 0.95).toFixed(2)) : price;

    const addProductToBasket = React.useCallback(() => {
        addProduct(props);
    }, [addProduct, props]);

    const deleteProductFromBasket = React.useCallback(() => {
        deleteProduct(props);
    }, [deleteProduct, props]);

    return (
        <StyledBasketCard>
            <BasketProductImage src={`https://raw.githubusercontent.com/ArturMukaev/VAZ_Car_Parts/main/src/images/products/${name}.png`} alt={name}/>
            <BasketProductInfo>
                <BasketProductName>{picture}</BasketProductName>
                <BasketProductPrice isSale={isSale}>{priceWithSale} руб.</BasketProductPrice>
                <BasketProductControls>
                    <Button onClick={addProductToBasket} appearance='icon'>+</Button>
                    <BasketProductCount>{count}</BasketProductCount>
                    <Button onClick={deleteProductFromBasket} appearance='icon'>-</Button>
                </BasketProductControls>
                <BasketProductTotal isSale={isSale}>{Number((priceWithSale * count).toFixed(2))} руб.</BasketProductTotal>
            </BasketProductInfo>
        </StyledBasketCard>
    );
};

export default BasketProductCard;
