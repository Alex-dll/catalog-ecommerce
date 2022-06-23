import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

export const Content = styled.section`
  padding: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 8px;
`;

export const Title = styled.span`
  display: flex;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Description = styled.span`
  display: flex;
  margin-top: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 1rem;
  width: 300px;
  height: 30px;
`;

export const Button = styled.button`
  margin-top: 2rem;
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
