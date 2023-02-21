import {BaseProductProps, ProductCardProps} from "./componentsTypes";

export interface ContextTypes {
    basketState: BasketState;
    addProduct: (item: ProductCardProps | BasketItem) => void;
    deleteProduct: (item: ProductCardProps | BasketItem) => void;
}

export interface BasketItem extends BaseProductProps{
    count: number;
}

export interface BasketState {
    products: BasketItem[];
    totalCount: number;
    totalPrice: number;
}