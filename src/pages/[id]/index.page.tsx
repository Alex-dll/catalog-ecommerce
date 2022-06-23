import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { Header, Highlights, SliderList, TitleBox } from "components";

import { getCatalog, getCompany, getProducts } from "utils/http";
import { CatalogAtCompanyProps } from "types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface Props {
  corporateName: string;
  catalogCompany: CatalogAtCompanyProps;
}

export default function Client({ corporateName, catalogCompany }: Props) {
  const [products, setProducts] = useState<NewProducts>([]);
  const { query } = useRouter();

  const id = query.id;

  const { data } = useQuery([`products`, id], () =>
    getProducts(catalogCompany.productIds)
  );

  useEffect(() => {
    if (data !== undefined) {
      setProducts(data);
    }
  }, [data]);

  return (
    <>
      <Header corporateName={corporateName} id={String(id)} />
      <Highlights products={products} />
      <TitleBox>
        <SliderList products={products} />
      </TitleBox>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id as string;
  const dataCompany = await getCompany(id);
  const catalogCompany = await getCatalog({
    companyId: dataCompany.id,
    maxItemsPage: 20,
    pageNumber: 1,
  });
  return {
    props: {
      corporateName: dataCompany.corporateName,
      catalogCompany,
    },
  };
};
