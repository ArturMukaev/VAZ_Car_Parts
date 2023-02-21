import React from 'react';
import {ProductCardProps, SelectedSection} from "../../../types/componentsTypes";
import {SectionOption, StyledProductPage} from "./styled";
import ProductCard from "../product_card/ProductCard";
import {StyledReviewsBlock} from "../../reviews/styled";
import ReviewCard from "../../reviews/ReviewCard";
import {StyledHeadingBlack, StyledTextBlack} from "../../helpers";

const ProductPage = (props: ProductCardProps): JSX.Element => {
    const [selectedSection, setSelectedSection] = React.useState<SelectedSection>(SelectedSection.Reviews);
    const ReviewsSection = React.useMemo(() => (
        <StyledReviewsBlock>
            <ReviewCard name={props.reviews.author} text={props.reviews.text}/>
        </StyledReviewsBlock>
    ), [props.reviews]);
    return (
        <StyledProductPage>
            <ProductCard product={props}/>
            <StyledHeadingBlack>
                <SectionOption
                    onClick={() => {
                        setSelectedSection(SelectedSection.Reviews)
                    }}
                    selected={selectedSection === SelectedSection.Reviews}
                >Отзывы</SectionOption> /
                <SectionOption
                    onClick={() => {
                        setSelectedSection(SelectedSection.Description)
                    }}
                    selected={selectedSection === SelectedSection.Description}
                > Описание</SectionOption>
            </StyledHeadingBlack>
            {selectedSection === SelectedSection.Reviews
                ? ReviewsSection
                :
                <StyledTextBlack>
                    {props.description}
                </StyledTextBlack>
            }
        </StyledProductPage>
    );
};

export default ProductPage;
