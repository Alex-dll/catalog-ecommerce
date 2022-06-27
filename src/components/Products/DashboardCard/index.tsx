import Button from "components/utils/Button";
import Image from "next/image";
import React from "react";

import * as S from "./styles";

import img from "/public/noimageavailable.svg";

const DashboardCard: React.FC = () => {
  return (
    <S.Container>
      <Image alt="corporateName" src={img} width="50px" height="50px" />
      <S.Title>Titulo</S.Title>
      <S.Description>Descrição</S.Description>
      <S.Value></S.Value>
      <S.Available>
        <S.Title>indisponivel: </S.Title>
        <Button>Deixar Disponivel</Button>
      </S.Available>
      <S.ButtonWrapper>
        <S.UpdateProduct>🖋️</S.UpdateProduct>
        <S.RemoveProduct>X</S.RemoveProduct>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export { DashboardCard };
