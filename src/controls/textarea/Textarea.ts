import styled from "styled-components";

export const Textarea = styled.textarea`
  font-size: 20px;
  width: 100%;
  height: 100px;
  resize: none;
  align-self: center;
  background: #F1F7FF;
  border: 1px solid #3E74B0;
  border-radius: 8px;
  @media (max-width: 700px) {
    height: 80px;
    font-size: 16px;
  }
`;