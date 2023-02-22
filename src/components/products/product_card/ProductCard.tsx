import React from 'react';
import {ProductCardCatalogProps} from "../../../types/componentsTypes";
import {
    ProductBasket,
    ProductInfo,
    ProductManufacturer,
    ProductName,
    ProductPrice,
    StyledProductCard
} from "./styled";
import {ContextTypes} from "../../../types/contextTypes";
import {BasketContext} from "../../../App";
import {Loader} from "../../loader/Loader";

const ProductImage = React.lazy(() => import("./ProductImage"));

const ProductCard = ({product, clickName}: ProductCardCatalogProps): JSX.Element => {
    const {picture, price, name, manufacturer, isSale} = product;
    const {addProduct} = React.useContext<ContextTypes>(BasketContext);
    const addProductToBasket = React.useCallback(() => {
        addProduct(product);
    }, [addProduct, product]);
    return (
        <React.Suspense fallback={<Loader/>}>
            <StyledProductCard>
                <ProductImage src={`https://raw.githubusercontent.com/ArturMukaev/VAZ_Car_Parts/main/src/images/products/${name}.png`} alt={name}/>
                <ProductInfo>
                    {clickName
                        ? <ProductName clickable onClick={clickName}>{picture}</ProductName>
                        : <ProductName clickable={false}>{picture}</ProductName>}
                    <ProductManufacturer>Производитель: {manufacturer}</ProductManufacturer>
                    <ProductPrice
                        isSale={isSale}>{isSale ? Number((price * 0.95).toFixed(2)) : price} руб.</ProductPrice>
                    <ProductBasket onClick={addProductToBasket} appearance="long">В корзину</ProductBasket>
                </ProductInfo>
            </StyledProductCard>
        </React.Suspense>
    );
};

export default ProductCard;
