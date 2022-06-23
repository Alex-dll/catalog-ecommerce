import { Heading } from "components/utils";
import Input from "components/utils/Input";
import React from "react";

import * as S from "./styles";

const Company: React.FC = () => {
  return (
    <S.Container>
      <Heading>Empresa</Heading>

      <S.Wrapper>
        <S.Content>
          <S.Title>Atualize o cadastro da empresa aqui</S.Title>
          <S.Description>
            Abaixo estão as atuais informações da sua empresa
          </S.Description>

          <S.Form>
            <S.FormGroup>
              <Input placeholder="corporateName" />
              <Input placeholder="email" />
              <Input placeholder="Phone Number" />
              <Input placeholder="company Category" />
            </S.FormGroup>

            <S.Button>Atualiza Cadastro</S.Button>
          </S.Form>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export { Company };
