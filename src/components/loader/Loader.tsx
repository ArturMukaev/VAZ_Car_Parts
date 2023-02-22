import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: grid;
  width: 80px;
  height: 80px;
  align-self: center;
  justify-self: center;
  &:after {
    content: " ";
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #348578;
    border-color: #348578 transparent #348578 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;