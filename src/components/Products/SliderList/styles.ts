import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`;

export const slideBox = styled.div`
  padding: 0 1rem;

  .swiper-button {
          &-prev,
          &-next{
              top: 37%;
              color: ${({ theme }) => theme.colors.gray[100]};
              background: ${({ theme }) => theme.colors.green[500]};
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
              &:after{
                font-size: 1.3rem;
                margin: 0 -3px -3px 0;
              }
          }
          &-prev {
                &:after{
                  margin:0 -3px 0 -3px;
              }
      }
    }
`
