import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 750px;
  width: 100%;
  max-height: 700px;
  height: 100%;
  padding: 8px;
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

export const Category = styled.div``;

export const Products = styled.div``;

export const WrapperList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const ListProducts = styled.div`
  span {
    font-weight: bold;
  }
`;