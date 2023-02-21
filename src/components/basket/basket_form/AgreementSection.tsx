import React from 'react';
import {StyledAgreementSection} from "./styled";
import {Input} from "../../../controls/input/Input";
import {StyledTextBlack} from "../../helpers";

const AgreementSection = (): JSX.Element => (
    <StyledAgreementSection>
        <Input tick type="checkbox"/>
        <StyledTextBlack>Я соглашаюсь с политикой хранения и обработки персональных данных и пользовательским
            соглашением</StyledTextBlack>
    </StyledAgreementSection>
);


export default AgreementSection;
