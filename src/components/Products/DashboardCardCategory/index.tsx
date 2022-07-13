import Link from "next/link";

import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { deleteCategory } from "utils/http";

import * as S from "./styles";

type DashboardCardProps = {
  companyId: string;
  id: string;
  title: string;
  description: string;
};

const DashboardCardCategory: React.FC<DashboardCardProps> = ({
  id,
  title,
  description,
  companyId,
}: DashboardCardProps) => {
  const queryClient = useQueryClient();

  async function DeleteCategory(id: string) {
    const confirmation = confirm(
      "Você tem certeza que deseja excluir esta categoria?"
    );

    if (confirmation) {
      deleteCategory(id);

      await queryClient.refetchQueries();

      toast.success("Categoria deletada com sucesso! 🙂", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.log("Cancelado");
    }
  }

  async function HandleDeleteCategory() {
    try {
      await DeleteCategory(id);

      await queryClient.refetchQueries();
    } catch (error) {
      toast.error("Não foi possivel deletar a categiria! 😢", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.ButtonWrapper>
        <Link
          href={{
            pathname: "/[companyId]/home/categorias/atualizar-categoria/[id]",
            query: { companyId, id },
          }}
        >
          <S.UpdateProduct>
            <MdModeEdit size="25px" />
          </S.UpdateProduct>
        </Link>

        <S.RemoveProduct onClick={HandleDeleteCategory}>
          <MdDelete size="25px" />
        </S.RemoveProduct>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export { DashboardCardCategory };
