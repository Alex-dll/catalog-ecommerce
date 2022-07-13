import { DashboardCardCategory } from "components/Products/DashboardCardCategory";
import Button from "components/utils/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCategories } from "utils/http";

import * as S from "./styles";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Categories>([]);

  const { query } = useRouter();
  const id = query.id;

  const { data } = useQuery(["categoriesRegister", categories], () =>
    getCategories(String(id))
  );

  useEffect(() => {
    if (data !== undefined) {
      setCategories(data);
    }
  }, [data]);

  return (
    <S.Container>
      <S.Content>
        <S.Title>Categorias</S.Title>

        <S.Wrapper>
          <S.Category>
            <Link
              href={{
                pathname: "/[id]/home/categorias/cadastro-categoria",
                query: { id },
              }}
            >
              <Button>Cadastrar Categoria</Button>
            </Link>
          </S.Category>
        </S.Wrapper>
        <S.WrapperList>
          <S.ListProducts>
            <span>Lista de Categorias</span>

            <div>
              {categories.map((category) => {
                return (
                  <DashboardCardCategory
                    key={category.id}
                    companyId={String(id)}
                    id={String(category.id)}
                    title={category.name}
                    description={category.description}
                  />
                );
              })}
            </div>
          </S.ListProducts>
        </S.WrapperList>
      </S.Content>
    </S.Container>
  );
};

export { Categories };
