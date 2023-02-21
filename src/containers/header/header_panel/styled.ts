import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {StyledHeading2} from "../../../components/helpers";

export const StyledHeaderPanel = styled.div`
  display: grid;
  width: 100%;
  height: 80px;
  background: #7BA7D9;
  box-sizing: border-box;
  padding: 0 20px;
  grid-template-columns: 40px 1.5fr 2fr 2fr 3.5fr 1.5fr 1.5fr;

  .basketInfo {
    display: grid;
    grid-template-columns: 40px auto;
  }

  @media (max-width: 1250px) and (min-width: 1150px) {
    grid-template-columns: 40px 1.5fr 2fr 2fr 3.5fr 40px 1.5fr;
    .hidden1 {
      display: none;
    }

    .basketInfo {
      margin-left: 20px;
    }
  }

  @media (max-width: 1150px) {
    grid-template-columns: 40px 3fr 3fr 1fr;
    padding: 0 10px;
    .hidden1, .hidden2 {
      display: none;
    }
  }
`;

export const StyledMenu = styled.div`
  display: none;
  @media (max-width: 1150px) {
    display: block;
    justify-self: right;
    align-self: center;
  }
`;

export const StyledBasketInfo = styled(StyledHeading2)`
  justify-self: start;
  margin-left: 10px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
`;

export const BasketWrapper = styled.div`
  width: 40px;
  height: 40px;
  align-self: center;
`;

export const BurgerItems = styled.div<{isOpen: boolean}>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 400px;
  background: #F1F7FF;
  border: 1px solid black;
  border-radius: 5%;
  opacity: 0.95;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const BurgerItem = styled(AnchorLink)`
  font-style: normal;
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 15px;
  color: black;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);

  &:hover {
    color: #3354e8;
  }
`;

