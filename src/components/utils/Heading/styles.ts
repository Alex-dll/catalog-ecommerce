import styled from 'styled-components';

export const TitleBox = styled.div`
  margin-bottom: ${(mb) => mb ? '4rem' : '2rem'};
  text-align: ${(align) => align ? `${align}` : 'center'};
`;

