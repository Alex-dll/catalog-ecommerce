import React from "react";
import { Company } from "../Company";
import { Sidebar } from "components/Sidebar";

import * as S from "./styles";
import { ProductsRegister } from "../ProductsRegister";

const DashboardProducts: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Sidebar />
        <ProductsRegister />
      </S.Wrapper>
    </S.Container>
  );
};

export { DashboardProducts };
