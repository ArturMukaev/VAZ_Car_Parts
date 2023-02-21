import styled from "styled-components";

export const StyledProductPage = styled.div`
  display: grid;
  grid-template-rows: 220px 30px auto;
  @media (max-width: 580px) {
    grid-template-rows: 250px 30px auto;
  }
`;

export const SectionOption = styled.span<{selected: boolean}>`
  transition: all .2s ease-in-out;
  color: ${(props) => (props.selected ? 'blue' : 'black')};
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
