import styled from "styled-components";

export default styled.button`
  padding: 4px;
  width: 100%;
  border: transparent;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.green[500]};
  filter: brightness(120%);

  transition: ease 0.4s all;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(70%);
  }
`;
