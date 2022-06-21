import { NavigatorsLink } from "components/NavigatorsLink";
import React from "react";

import * as S from "./styles";

import { menuLinks } from "./data";

//Componente que vai usar das categorias de produtos.
const Nav: React.FC = () => {
  return (
    <S.Nav>
      <S.Ul>
        {menuLinks.map((item, index) => (
          <S.Li key={index}>
            <NavigatorsLink path={item.url} text={item.title} font="1rem" />
          </S.Li>
        ))}
      </S.Ul>
    </S.Nav>
  );
};

export { Nav };
