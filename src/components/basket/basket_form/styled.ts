import styled from "styled-components";
import {StyledHeadingBlack} from "../../helpers";
import {Button} from "../../../controls/button/Button";

export const StyledBasketForm = styled.form`
  display: grid;
  grid-template-rows: 50px 60px 60px 60px 60px 120px 80px 60px;
  gap: 5px;
  margin: 0 20px;
  @media (max-width: 700px) {
    
  }
`;

export const StyledFormControl = styled.div`
  display: grid;
  grid-template-rows: 25px auto;
`;

export const StyledAgreementSection = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  gap: 10px;
`;

export const StyledFormLabel = styled(StyledHeadingBlack)`
  font-size: 20px;
`;

export const StyledFormHeading = styled(StyledHeadingBlack)`
  text-align: center;
`;

export const StyledFormButton = styled(Button)`
  justify-self: center;
`;