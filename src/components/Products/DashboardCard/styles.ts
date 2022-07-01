import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  padding: 1rem;
  margin: 1rem;
`;

export const Title = styled.span`
  padding: 8px;
`;

export const Description = styled.p`
  padding: 8px;
  max-width: 400px;
`;

export const Value = styled.span`
  padding: 8px;
`;

export const Available = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button``;

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px;
  gap: 1px;
`;

export const UpdateProduct = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const RemoveProduct = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
