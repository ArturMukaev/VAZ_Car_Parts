import React, {createContext, useMemo, useEffect, useCallback} from 'react';
import {useImmer} from "use-immer";
import {createGlobalStyle} from 'styled-components';
import Header from "./containers/header/Header";
import {BasketItem, BasketState, ContextTypes} from "./types/contextTypes";
import {defaultContext, initialBasketState} from "./components/helpers";
import Footer from "./containers/footer";
import Body from "./containers/body";
import {ProductCardProps} from "./types/componentsTypes";
import useDidMountEffect from "./hooks/useDidMountEffect";

const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #F5F5F5;
    margin: 0;
    min-height: 100vh;
  }

  #root {
    display: grid;
    grid-template-columns: minmax(320px, 1fr);
    grid-template-rows: auto 1fr 120px;
    grid-template-areas:
      "header"
      "body"
      "footer";
  }
`;

export const BasketContext = createContext<ContextTypes>(defaultContext);

const App: React.FC = (): JSX.Element => {
    /* STATE */
    const [basketState, setBasketState] = useImmer<BasketState>(initialBasketState);

    /* EFFECT */
    useEffect(() => {
        // Заполняем начальное состояние
        const productsExist = localStorage.getItem('products');
        const products: BasketItem[] = productsExist ? JSON.parse(productsExist) : [];
        let totalCount: number = 0;
        let totalPrice: number = 0;
        for (let product of products) {
            const {count, price, isSale} = product;
            totalCount += count;
            totalPrice = Number((totalPrice + count * (isSale ? Number((price * 0.95).toFixed(2)) : price)).toFixed(2));
        }
        setBasketState(draft => {
            draft.products = products;
            draft.totalCount = totalCount;
            draft.totalPrice = totalPrice;
        });
    }, [setBasketState]);

    useDidMountEffect(() => {
        // Обновляем localStorage
        localStorage.setItem('products', JSON.stringify(basketState.products));
    }, [basketState]);

    /* CALLBACK */
    // Метод для добавления продукта в корзину
    const addProductBasket = useCallback((product: ProductCardProps | BasketItem) => {
        const {id, price, picture, name, isSale} = product;
        const productToAdd: BasketItem = {picture, name, id, price, isSale, count: 1};
        const priceWithSale = isSale ? Number((price * 0.95).toFixed(2)) : price;
        setBasketState((draft) => {
            const existingProduct = draft.products.findIndex((el) => (el.id === id));
            if (~existingProduct) {
                draft.products[existingProduct].count++;
                draft.totalPrice = Number((draft.totalPrice + priceWithSale).toFixed(2));
                draft.totalCount++;
            } else {
                draft.products.push(productToAdd);
                draft.totalPrice = Number((draft.totalPrice + priceWithSale).toFixed(2));
                draft.totalCount++;
            }
        });
    }, [setBasketState]);

    // Метод для удаления продукта из корзины
    const deleteProductBasket = useCallback((product: ProductCardProps | BasketItem) => {
        const {id, price, isSale} = product;
        const priceWithSale = isSale ? Number((price * 0.95).toFixed(2)) : price;
        setBasketState(draft => {
            const indexToDelete = draft.products.findIndex((el) => (el.id === id));
            if (!~indexToDelete) return;
            if (draft.products.at(indexToDelete)?.count === 1) {
                draft.products.splice(indexToDelete, 1);
                draft.totalPrice = Number((draft.totalPrice - priceWithSale).toFixed(2));
                draft.totalCount--;
            } else {
                draft.products[indexToDelete].count--;
                draft.totalPrice = Number((draft.totalPrice - priceWithSale).toFixed(2));
                draft.totalCount--;
            }
        });
    }, [setBasketState]);

    /* MEMO */
    const stateValue = useMemo((): ContextTypes => (
        {
            basketState,
            addProduct: addProductBasket,
            deleteProduct: deleteProductBasket,
        }
    ), [basketState]);

    return (
        <BasketContext.Provider value={stateValue}>
            <GlobalStyle/>
            <Header/>
            <Body/>
            <Footer/>
        </BasketContext.Provider>
    );
};

export default App;
