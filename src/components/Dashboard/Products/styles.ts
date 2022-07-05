import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  max-height: 800px;
  padding: 8px;
  height: 100%;

  overflow: auto;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.gray[100]};

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;

export const Category = styled.div`
  padding: 0 4px;
`;

export const Products = styled.div`
  padding: 0 4px;
`;

export const WrapperList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const ListProducts = styled.div`
  height: 100%;

  span {
    font-weight: bold;
  }
`;
