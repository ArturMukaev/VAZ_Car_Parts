import React from 'react';
import {ReviewName, StyledReviewCard, ReviewText} from "./styled";
import {ReviewProps} from "../../types/componentsTypes";

const ReviewCard = ({name, text}: ReviewProps): JSX.Element => (
    <StyledReviewCard>
        <ReviewName>{name}</ReviewName>
        <ReviewText>{text}</ReviewText>
    </StyledReviewCard>
);


export default ReviewCard;
