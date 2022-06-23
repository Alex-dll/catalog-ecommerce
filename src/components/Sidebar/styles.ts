import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  color: ${({ theme }) => theme.colors.white[500]};

  a {
    color: ${({ theme }) => theme.colors.white[500]};
    text-decoration: none;
  }
`;
