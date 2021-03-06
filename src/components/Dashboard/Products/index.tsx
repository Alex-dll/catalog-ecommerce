import { DashboardCard } from "components/Products";
import Button from "components/utils/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CatalogAtCompanyProps } from "types";
import { getProducts } from "utils/http";

import * as S from "./styles";

interface Props {
  catalogCompany: CatalogAtCompanyProps;
}

const Products: React.FC<Props> = ({ catalogCompany }: Props) => {
  const [products, setProducts] = useState<NewProducts>([]);

  const { query } = useRouter();
  const id = query.id;

  const { data } = useQuery(["productsRegister", products], () =>
    getProducts(catalogCompany.productIds)
  );

  useEffect(() => {
    if (data !== undefined) {
      setProducts(data);
    }
  }, [data]);

  return (
    <S.Container>
      <S.Content>
        <S.Title>Produtos</S.Title>

        <S.Wrapper>
          <S.Products>
            <Link
              href={{
                pathname: "/[id]/home/produtos/cadastro-produtos",
                query: { id },
              }}
            >
              <Button>Cadastrar Produto</Button>
            </Link>
          </S.Products>
        </S.Wrapper>
        <S.WrapperList>
          <S.ListProducts>
            <span>Lista de Produtos</span>

            <div>
              {products.map((product) => {
                return (
                  <DashboardCard
                    key={product.id}
                    companyId={String(id)}
                    id={String(product.id)}
                    price={product.price}
                    image={product.image}
                    availableSalle={Number(product.availableSalle)}
                    description={product.description}
                    title={product.title}
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

export { Products };
