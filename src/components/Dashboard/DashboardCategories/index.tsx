import React from "react";
import { Sidebar } from "components/Sidebar";

import * as S from "./styles";

import { Categories } from "../Categories";

const DashboardCategories: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Sidebar />
        <Categories />
      </S.Wrapper>
    </S.Container>
  );
};

export { DashboardCategories };
