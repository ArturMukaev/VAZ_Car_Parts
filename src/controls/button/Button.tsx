import React from 'react';
import {StyledButton} from "./styledButton";
import {ButtonProps} from "../../types/controlsTypes";


export const Button = ({appearance, children, ...props}: ButtonProps): JSX.Element => (
    <StyledButton appearance={appearance} {...props}>
        {children}
    </StyledButton>
);
