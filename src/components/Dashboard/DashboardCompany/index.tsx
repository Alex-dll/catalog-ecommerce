import React from "react";
import { Company } from "../Company";
import { Sidebar } from "components/Sidebar";

import * as S from "./styles";

const DashboardCompany: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Sidebar />
        <Company />
      </S.Wrapper>
    </S.Container>
  );
};

export { DashboardCompany };
