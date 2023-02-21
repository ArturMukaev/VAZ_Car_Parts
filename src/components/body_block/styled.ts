import styled from "styled-components";

export const StyledBLock = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  box-sizing: border-box;
  height: auto;
  margin: 10px 20px;
  padding: 12px 30px;
  background: #F1F7FF;
  border: 1px solid rgba(123, 167, 217, 0.25);
  border-radius: 15px;
  p, .text {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    margin: 0;
  }
  ul {
    margin: 0;
  }
  @media (max-width: 580px) {
    margin: 10px 5px;
    padding: 12px 10px;
    grid-template-rows: 80px 1fr;
  }
`;