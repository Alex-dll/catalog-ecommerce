import styled from 'styled-components';

export const Section = styled.div`
  padding: ${(paddingLg) => paddingLg ? '4rem 0 2rem 0' : '2rem 0 1rem 0'};
  min-height: ${(minH) => (minH ? '43rem' : '')};
  display: ${(flex) => (flex ? 'flex' : 'block')};
  align-items:center;

  &.not-pd{
      padding:0;
  }

  &.xs{
      padding:1.5rem 0 1rem 0;
  }
`;

