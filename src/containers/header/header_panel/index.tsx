import React from 'react';
import {BurgerItem, BurgerItems, StyledHeaderPanel, StyledMenu, StyledBasketInfo, BasketWrapper} from "./styled";
import car from "../../../images/svg/car.svg";
import basket from "../../../images/svg/basket.svg";
import cross from "../../../images/svg/cross.svg";
import burger from "../../../images/svg/burger.svg";
import {StyledHeading, StyledSvg, StyledHeading2, CrossContainer, CountContainer} from "../../../components/helpers";
import {Input} from "../../../controls/input/Input";
import {BasketContext} from "../../../App";
import {ContextTypes} from "../../../types/contextTypes";
import Basket from "../../../components/basket/Basket";

const HeaderPanel: React.FC = (): JSX.Element => {
    const {basketState: {totalCount, totalPrice}} = React.useContext<ContextTypes>(BasketContext);
    // Работа с меню при маленьком экране
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    // Открытие и закрытие модалки корзины
    const [basketOpen, setBasketOpen] = React.useState<boolean>(false);
    const closeMenu = (): void => {
        setMenuOpen(false);
    }
    const openMenu = (): void => {
        setMenuOpen(true);
    }

    return (
        <>
            <StyledHeaderPanel>
                <StyledSvg src={car}/>
                <StyledHeading>VAZ Paradise</StyledHeading>
                <StyledHeading className="hidden2">Автозапчасти для<br/>ВАЗа в Перми</StyledHeading>
                <StyledHeading className="hidden2">Поиск по каталогу:</StyledHeading>
                <Input className="hidden2" placeholder="Начните вводить наименование товара"/>
                <StyledHeading2 className="hidden1">+7(902)999-99-99</StyledHeading2>
                <div className="basketInfo">
                    <BasketWrapper onClick={() => setBasketOpen(true)}>
                        <StyledSvg src={basket}/>
                    </BasketWrapper>
                    <StyledBasketInfo>
                        <div>{totalPrice} руб.</div>
                        <CountContainer>{totalCount}</CountContainer>
                    </StyledBasketInfo>
                </div>
                <StyledMenu>
                    <div onClick={openMenu}>
                        {!menuOpen && <StyledSvg src={burger}/>}
                    </div>
                    <BurgerItems isOpen={menuOpen}>
                        <CrossContainer onClick={closeMenu}>
                            <StyledSvg src={cross}/>
                        </CrossContainer>
                        <BurgerItem onClick={closeMenu} href='#company'>О компании</BurgerItem>
                        <BurgerItem onClick={closeMenu} href='#payment'>Оплата</BurgerItem>
                        <BurgerItem onClick={closeMenu} href='#delivery'>Доставка</BurgerItem>
                        <BurgerItem onClick={closeMenu} href='#sale'>Акции</BurgerItem>
                        <BurgerItem onClick={closeMenu} href='#catalog'>Каталог</BurgerItem>
                        <BurgerItem onClick={closeMenu} href='#contacts'>Контакты</BurgerItem>
                        <BurgerItem onClick={closeMenu} href='#reviews'>Отзывы</BurgerItem>
                    </BurgerItems>
                </StyledMenu>
            </StyledHeaderPanel>
            <Basket isOpen={basketOpen} closeModal={() => setBasketOpen(false)}/>
        </>
    );
};

export default HeaderPanel;
