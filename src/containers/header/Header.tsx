import React from 'react';
import {StyledHeader} from "./styledHeader";
import HeaderPanel from "./header_panel";
import Navbar from "./navbar";

const Header = (): JSX.Element => (
    <StyledHeader>
        <HeaderPanel/>
        <Navbar/>
    </StyledHeader>
);

export default Header;
