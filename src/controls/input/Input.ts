import styled, {css} from "styled-components";

export const Input = styled.input<{tick?: boolean}>`
  font-size: 20px;
  width: 100%;
  height: 30px;
  align-self: center;
  background: #F1F7FF;
  border: 1px solid #3E74B0;
  border-radius: 8px;
  @media (max-width: 700px) {
    height: 24px;
    font-size: 16px;
  }
  ${(props) =>
          props.tick &&
          css`
            width: 25px;
            height: 25px;`
  }
`;