import React from 'react';
import {StyledNavbar} from "./styled";
import {Button} from "../../../controls/button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = (): JSX.Element => (
    <StyledNavbar>
        <AnchorLink href='#company'><Button appearance='big'>О компании</Button></AnchorLink>
        <AnchorLink href='#payment'><Button appearance='big'>Оплата</Button></AnchorLink>
        <AnchorLink href='#delivery'><Button appearance='big'>Доставка</Button></AnchorLink>
        <AnchorLink href='#sale'><Button appearance='big'>Акции</Button></AnchorLink>
        <AnchorLink href='#catalog'><Button appearance='big'>Каталог</Button></AnchorLink>
        <AnchorLink href='#contacts'><Button appearance='big'>Контакты</Button></AnchorLink>
        <AnchorLink href='#reviews'><Button appearance='big'>Отзывы</Button></AnchorLink>
    </StyledNavbar>
);

export default Navbar;
