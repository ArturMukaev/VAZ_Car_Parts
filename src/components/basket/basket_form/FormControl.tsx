import React from 'react';
import {StyledFormControl, StyledFormLabel} from "./styled";
import {FormControlProps} from "../../../types/componentsTypes";

const FormControl = (props: FormControlProps): JSX.Element => (
    <StyledFormControl>
        <StyledFormLabel>{props.label}</StyledFormLabel>
        {props.children}
    </StyledFormControl>
);

export default FormControl;
