import React from 'react';
import {StyledBLock} from "./styled";
import {StyledHeadingBlack} from "../helpers";
import {BlockProps} from "../../types/componentsTypes";

const Block = ({heading, id, children}: BlockProps): JSX.Element => (
    <StyledBLock id={id}>
        <StyledHeadingBlack>{heading}</StyledHeadingBlack>
        {children}
    </StyledBLock>
);


export default Block;
