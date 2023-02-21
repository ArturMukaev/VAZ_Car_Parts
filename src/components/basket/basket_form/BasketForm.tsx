import React from 'react';
import {StyledBasketForm, StyledFormButton, StyledFormHeading} from "./styled";
import FormControl from "./FormControl";
import {Input} from "../../../controls/input/Input";
import {Select} from "../../../controls/select/Select";
import {Textarea} from "../../../controls/textarea/Textarea";
import AgreementSection from "./AgreementSection";

const BasketForm = (): JSX.Element => {
    const confirmMock = (e: React.SyntheticEvent) => {
        e.preventDefault();
        alert("Данный функционал в разработке!");
    }
    return (
        <StyledBasketForm>
            <StyledFormHeading>Оформление заказа</StyledFormHeading>
            <FormControl label="ФИО">
                <Input placeholder="Иван Иванов Иванович"/>
            </FormControl>
            <FormControl label="Номер телефона">
                <Input placeholder="+7 (000) 000-00-00"/>
            </FormControl>
            <FormControl label="E-mail">
                <Input placeholder="example@mail.ru"/>
            </FormControl>
            <FormControl label="Способ получения заказа">
                <Select>
                    <option>Самовывоз</option>
                    <option>Доставка</option>
                    <option selected={true} disabled={true}>Выберите способ получения заказа</option>
                </Select>
            </FormControl>
            <FormControl label="Комментарий">
                <Textarea rows={5} placeholder="Укажите комментарий к заказу"/>
            </FormControl>
            <AgreementSection/>
            <StyledFormButton appearance="long"
                              onClick={confirmMock}>Заказать</StyledFormButton>
        </StyledBasketForm>
    );
};

export default BasketForm;
