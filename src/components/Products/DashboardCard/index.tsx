import Button from "components/utils/Button";
import Image from "next/image";
import React from "react";

import * as S from "./styles";

import img from "/public/noimageavailable.svg";

type DashboardCardProps = {
  title: string;
  description: string;
  available: number;
  image: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  available,
  image,
}: DashboardCardProps) => {
  return (
    <S.Container>
      <Image
        alt="corporateName"
        src={image || img}
        width="70px"
        height="70px"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Value></S.Value>
      <S.Available>
        <S.Title>indisponivel: {available} </S.Title>
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
