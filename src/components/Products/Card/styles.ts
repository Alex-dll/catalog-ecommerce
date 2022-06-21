import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  position: relative;

  &:hover {
    img {
      transform: scale(1.1);
    }

    /* .card-box {
      &:after {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    .card-actions {
      opacity: 1;
      top: 50%;
    } */
  }
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 4;
    transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
  }
`;


export const Actions = styled.div`
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  left: 0;
  gap: 1rem;
  opacity: 0;
  z-index: 5;
  transition: all 500ms cubic-bezier(1,0.01,0,1.07);
  transition-timing-function: cubic-bezier(1,0.01,0,1.07);
`;

export const Icon = styled.span`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease 0.4s all;

  .icon {
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.green[500]};
    transition: ease 0.4s all;
  }

  &:hover {
    transform: scale(1.1)
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;

export const Title = styled.p`
  font-size: 1.2re ;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-weight: 300;
`;

export const Price = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.green[500]};
  font-weight: 700;
`;

export const BuyButton = styled.button`
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
`
