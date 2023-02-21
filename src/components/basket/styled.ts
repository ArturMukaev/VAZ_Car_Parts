import styled from "styled-components";
import Modal from 'react-modal';
import {CrossContainer} from "../helpers";

export const StyledBasket = styled(Modal)`
  display: grid;
  width: 600px;
  height: 90%;
  grid-template-rows: 40px auto 1fr 50px;
  position: fixed;
  top: 5%;
  left: 50%;
  padding: 15px;
  margin-left: -300px;
  background: #F1F7FF;
  border: 3px solid #789DC8;
  border-radius: 20px;
  overflow-y: scroll;
  @media (max-width: 700px) {
    width: 350px;
    margin-left: -187px;
    padding: 5px;
  }
`;

export const BasketCross = styled(CrossContainer)`
  top: 5px;
  @media (max-width: 700px) {
    top: 2px;
  }
`;