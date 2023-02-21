import React from 'react';
import ProductCard from "../products/product_card/ProductCard";
import categories from "../../mocks/mock.json";
import {ProductCardProps} from "../../types/componentsTypes";
import {ProductsContainer} from "../helpers";

const SalesBlock = (): JSX.Element => {
    // Получаем продукты, на которые сейчас скидка из мока
    let onSaleProducts: ProductCardProps[] = [];
    for (const category of categories) {
        for (const subcategory of category.subcategories) {
            for (const product of subcategory.items) {
                product.isSale && onSaleProducts.push(product);
            }
        }
    }
    return (
        <ProductsContainer>
            {onSaleProducts.map((item: ProductCardProps) => (<ProductCard key={item.id} product={item}/>))}
        </ProductsContainer>
    );
};

export default SalesBlock;
