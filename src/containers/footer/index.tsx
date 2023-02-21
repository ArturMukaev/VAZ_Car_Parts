import React from 'react';
import {
    DuoContainer, DuoContainer2,
    FooterInfo, FooterPNG, FooterSVG,
    PicturesContainer,
    StyledFooter,
    StyledFooterLink,
    StyledFooterText,
} from "./styled";
import visa from "../../images/pay_methods/visa.png";
import mastercard from "../../images/pay_methods/MasterCard.png";
import mir from "../../images/pay_methods/Mir.png";
import phone from "../../images/svg/phone.svg";
import {format} from 'date-fns';

const Footer = (): JSX.Element => (
    <StyledFooter>
        <DuoContainer>
            <StyledFooterText>Принимаем оплату:</StyledFooterText>
            <PicturesContainer>
                <FooterPNG src={visa} alt="visa image"></FooterPNG>
                <FooterPNG src={mastercard} alt="mastercard image"></FooterPNG>
                <FooterPNG src={mir} alt="mir image"></FooterPNG>
            </PicturesContainer>
        </DuoContainer>
        <DuoContainer2>
            <StyledFooterLink>Политика обработки <br/> персональных данных</StyledFooterLink>
            <StyledFooterLink>Пользовательское соглашение <br/> Документы</StyledFooterLink>
        </DuoContainer2>
        <FooterInfo>
            <StyledFooterText>
                2017 - {format(new Date(), 'yyyy')} © VAZ Paradise - запчасти для автомобилей семейства ВАЗ
            </StyledFooterText>
        </FooterInfo>
        <DuoContainer className="disappear">
            <StyledFooterText>улица Пушкина, д. 88 <br/> +7(902)999-99-99</StyledFooterText>
            <StyledFooterText>улица Лермонтова, д. 77 <br/> +7(952)999-99-99</StyledFooterText>
        </DuoContainer>
        <FooterSVG src={phone}/>
    </StyledFooter>
);

export default Footer;
