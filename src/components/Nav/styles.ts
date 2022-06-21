import styled from 'styled-components';

export const Nav = styled.nav`

`;

export const Ul = styled.ul`
  max-width: 70vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  text-decoration: none;
  transition: ease 0.4s all;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[500]};
  }
`;

