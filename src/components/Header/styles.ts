import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  background: ${({ theme }) => theme.colors.white[500]};


  box-shadow:0px 1.4px 1.5px rgba(0,0,0,0.02),
    0px 3.5px 3.9px rgba(0,0,0,0.025),0px 7.1px 8px rgba(0,0,0,0.028),
    0px 14.6px 16.4px rgba(0,0,0,0.03),0px 40px 45px rgba(0,0,0,0.04);

`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`


