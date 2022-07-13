import styled, { css } from "styled-components";

type Props = {
  theme: any;
  error?: TypeError | null;
};

export default styled.input<Props>`
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 10px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.green[500]};
  }

  ${({ theme, error }: Props) =>
    error &&
    css`
      color: ${theme.colors.red[500]};
      border-color: ${theme.colors.red[500]} !important;
    `}
`;
