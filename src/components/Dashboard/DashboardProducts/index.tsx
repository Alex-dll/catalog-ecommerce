import React from "react";
import { Sidebar } from "components/Sidebar";

import * as S from "./styles";
import { Products } from "../Products";
import { CatalogAtCompanyProps } from "types";

interface Props {
  catalogCompany: CatalogAtCompanyProps;
}

const DashboardProducts: React.FC<Props> = ({ catalogCompany }: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Sidebar />
        <Products catalogCompany={catalogCompany} />
      </S.Wrapper>
    </S.Container>
  );
};

export { DashboardProducts };
