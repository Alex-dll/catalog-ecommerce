import { Cart } from "components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { CatalogAtCompanyProps } from "types";
import { getCatalog, getCompany } from "utils/http";

interface Props {
  corporateName: string;
  catalogCompany: CatalogAtCompanyProps;
}

export default function Carrinho({ corporateName, catalogCompany }: Props) {
  return (
    <>
      <Cart corporateName={corporateName} catalogCompany={catalogCompany} />
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
