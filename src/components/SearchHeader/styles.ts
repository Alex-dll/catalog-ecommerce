import styled from 'styled-components';
import { BiSearchAlt, BiShoppingBag } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`

export const Search = styled(BiSearchAlt)`
  font-size: 2.3rem;
  transition: ease 0.4s all ;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[500]};
  }
`

export const Cart = styled(BiShoppingBag)`
  font-size: 2.3rem;
  transition: ease 0.4s all ;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[500]};
  }
`


