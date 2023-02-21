import React from 'react';
import {StyledBody} from "./styled";
import Block from "../../components/body_block/Block";
import SalesBlock from "../../components/sales/SalesBlock";
import ReviewsBlock from "../../components/reviews/ReviewsBlock";
import Catalog from "../../components/products/Calatog";

const Body = (): JSX.Element => (
    <StyledBody>
        <Block
            id="company"
            heading="О компании:">
            <p>
                Добрый день, уважаемый клиент! Хотим рассказать немного о нашей компании.
                VAZ Paradise - интернет-магазин запчастей для ВАЗ. Мы продаем запчасти для ВАЗа и аксессуары для ВАЗ
                любых моделей.
                Запчастями для автомобильного семейства ВАЗ мы занимаемся уже более 20 лет.
                В нашем каталоге более 7500 наименований деталей.
            </p>
        </Block>
        <Block id="sale" heading="Текущие акции">
            <SalesBlock/>
        </Block>
        <Catalog/>
        <Block id="reviews" heading="Отзывы">
            <ReviewsBlock/>
        </Block>
        <Block id="payment" heading="Информация об оплате">
                <span className="text">
                    В нашем магазине вы можете произвести оплату несколькими способами:
                    <ul>
                        <li>Оплата наличными</li>
                        <li>Оплата банковской картой</li>
                        <li>Оплата безналичным расчетом без НДС</li>
                    </ul>
                </span>
        </Block>
        <Block id="delivery" heading="Доставка запчастей">
                <span className="text">
                    Доставка по Перми осуществляется нами в течении двух рабочих дней после оформления заказа. <br/>
                    Доставка по России осуществляется при 100% предоплате следующими транспортными компаниями: <br/>
                    <ul>
                        <li>ПЭК</li>
                        <li>GTD (КИТ)</li>
                    </ul>
                    Стоимость доставки до транспортной компании 200 рублей.
                </span>
        </Block>
        <Block id="contacts"
               heading="Контакты магазина VAZ Paradise">
            <p>
                E-mail: info@vaz59.ru <br/> Адреса магазинов: <br/>
                Магазин на Пушкина: улица Пушкина, д. 88, +7(902)999-99-99, Пн-Пт: 9:00-18:00, Сб-Вс:
                9:00-16:00 <br/>
                Магазин на Лермонтова: улица Лермонтова, д. 77, +7(952)999-99-99, Пн-Пт: 9:00-18:00, Сб-Вс:
                9:00-16:00
            </p>
        </Block>
    </StyledBody>
);


export default Body;
