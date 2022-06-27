import { DashboardCard } from "components/Products";
import Button from "components/utils/Button";
import Input from "components/utils/Input";
import React from "react";

import * as S from "./styles";

const ProductsRegister: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Products</S.Title>

        <S.Wrapper>
          <S.Category>
            <Button>Cadastrar Categoria</Button>
          </S.Category>
          <S.Products>
            <Button>Cadastrar Produto</Button>
          </S.Products>
        </S.Wrapper>
        <S.WrapperList>
          <S.ListProducts>
            <span>Lista de Produtos</span>

            <div>
              <DashboardCard />
            </div>
          </S.ListProducts>
        </S.WrapperList>
      </S.Content>
    </S.Container>
  );
};

export { ProductsRegister };
