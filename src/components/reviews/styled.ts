import styled from "styled-components";
import {StyledHeadingBlack, StyledTextBlack} from "../helpers";
import {Button} from "../../controls/button/Button";

export const StyledReviewsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .reviews {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  @media (max-width: 620px) {
    .reviews {
      grid-template-columns: 1fr;
    }
  }
`;

export const StyledReviewCard = styled.div`
  display: grid;
  width: 250px;
  height: 130px;
  padding: 5px 10px;
  margin: 0 5px;
  grid-template-rows: 30px 1fr;
  background: #F4F4F4;
  border: 1px solid #000000;
  border-radius: 10px;
  @media (max-width: 1400px) {
    width: 200px;
    justify-self: center;
  }
`;

export const ReviewName = styled(StyledHeadingBlack)`
  font-size: 20px;
  line-height: 23px;
`;

export const ReviewText = styled(StyledTextBlack)`
  text-align: left;
  max-height: 100px;
  overflow: hidden;
`;

export const ReviewButton = styled(Button)`
  align-self: center;
  justify-self: center;
`;