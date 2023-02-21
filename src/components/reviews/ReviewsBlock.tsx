import React from 'react';
import {ReviewButton, StyledReviewsBlock} from "./styled";
import ReviewCard from "./ReviewCard";

// Отзывы замоканы хардкодом, чтобы показать как будет выглядеть блок с отзывами
const ReviewsBlock = (): JSX.Element => (
    <StyledReviewsBlock>
        <div className="reviews">
            <ReviewCard name="Иван Иванов"
                        text="Отличный магазинчик. Цены самые низкие в Перми да и в России. Приходите убедитесь сами."/>
            <ReviewCard name="Олег Олегов"
                        text="Покупал амортизаторы, не подошли почему то по толщине.... Все заменили без проблем."/>
        </div>
        <ReviewButton appearance="long" onClick={() => alert("Данный функционал в разработке!")}>Оставить отзыв</ReviewButton>
        <div className="reviews">
            <ReviewCard name="Александр Александров"
                        text="Всем советую это место. Цены дешевле всех, помогают с подбором и всегда все есть рябята молодцы"/>
            <ReviewCard name="Сергей Сергеев"
                        text="Спасибо данному магазину за качественный и недорогой товар!Огромный выбор комплектующих к моему автомобилю!"/>
        </div>
    </StyledReviewsBlock>
);


export default ReviewsBlock;
