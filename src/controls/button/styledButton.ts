import styled, { css } from "styled-components";
import {ButtonProps} from "../../types/controlsTypes";

export const StyledButton = styled.button<ButtonProps>`
  font-size: 20px;
  font-weight: 400;
  color: white;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  background: #7BA7D9;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  ${(props: ButtonProps) =>
          props.disabled &&
          css`
            opacity: 0.6;
            &:hover {
              box-shadow: none;
              cursor: not-allowed;
            } `
  }
  ${(props: ButtonProps) => {
    switch (props.appearance) {
      case 'big':
        return css`
          width: 160px;
          height: 60px;
        `;
      case 'medium':
        return css`
          width: 140px;
          height: 30px;
        `;
      case 'small':
        return css`
          width: 110px;
          height: 40px;
        `;
      case 'icon':
        return css`
          width: 30px;
          height: 30px;
          border: none;
          background: white;
          color: black;
          text-shadow: none;
          align-self: center;
          justify-self: center;
          transition: all .2s ease-in-out;
          &:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        `;
      case 'long':
        return css`
          width: 200px;
          height: 50px;
          @media (max-width: 580px) {
            width: 160px;
          }
        `;
      default:
        return null;
    }
  }}

`;