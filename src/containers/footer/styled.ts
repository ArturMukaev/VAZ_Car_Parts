import styled from "styled-components";
import {StyledHeading, StyledSvg} from "../../components/helpers";

export const StyledFooter = styled.div`
  display: grid;
  grid-area: footer;
  width: 100%;
  height: 140px;
  background: #7BA7D9;
  box-sizing: border-box;
  padding: 0 20px;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;

  @media (max-width: 1050px) {
    height: 250px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .disappear {
      display: none;
    }
  }
`;

export const DuoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 20px 0;
`;

export const DuoContainer2 = styled(DuoContainer)`
  padding: 0;
`;

export const PicturesContainer = styled.div`
  align-self: center;
  justify-self: center;
`;

export const FooterInfo = styled.div`
  align-self: end;
  justify-self: center;
  padding-bottom: 20px;
`;

export const FooterPNG = styled.img`
  width: 30px;
  height: 15px;
  background: white;
  border: 0.1px solid black;
  border-radius: 10%;
  padding: 2px;
`;

export const FooterSVG = styled(StyledSvg)`
  width: 100px;
  height: 100px;
  justify-self: end;
  padding-right: 20px;
  @media (max-width: 1050px) {
    justify-self: center;
    padding-right: 0;
  }
`;

export const StyledFooterText = styled(StyledHeading)`
  font-size: 14px;
  font-weight: 400;
`;

export const StyledFooterLink = styled(StyledFooterText)`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: blue;
  }
`;