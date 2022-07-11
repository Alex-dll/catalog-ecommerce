import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { formatPrice } from "services/format";

import Button from "components/utils/Button";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { deleteProduct, updateProductAvailableById } from "utils/http";

import * as S from "./styles";

import imageFallback from "/public/noimageavailable.svg";

type DashboardCardProps = {
  companyId: string;
  id: string;
  title: string;
  price: number;
  description: string;
  availableSalle: number;
  image: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  id,
  title,
  price,
  description,
  availableSalle,
  image,
  companyId,
}: DashboardCardProps) => {
  const [isAvailable, setIsAvailable] = useState(availableSalle);

  const queryClient = useQueryClient();

  async function DeleteProduct(id: string) {
    const confirmation = confirm(
      "Você tem certeza que deseja excluir este produto?"
    );

    if (confirmation) {
      deleteProduct(id);

      await queryClient.refetchQueries();

      toast.success("Produto deletado com sucesso! 🙂", {
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

  async function HandleDeleteProduct() {
    try {
      await DeleteProduct(id);
    } catch (error) {
      toast.error("Não foi possivel deletar o produto! 😢", {
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

  async function handleChangeProductAvailable() {
    try {
      setIsAvailable((prevState) => (prevState === 1 ? 0 : 1));

      console.log(isAvailable);

      await updateProductAvailableById(id, isAvailable);

      queryClient.invalidateQueries("productsRegister");

      toast.success("Produto atualizado com sucesso! 🙂", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
      toast.error("Não foi possivel atualizar o produto! 😢", {
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
      <S.ImageBox>
        {image === null || image === "" ? (
          <Image
            alt="corporateName"
            src={imageFallback}
            width="70px"
            height="70px"
          />
        ) : (
          <Image alt="corporateName" src={image} width="70px" height="70px" />
        )}
        <S.Title>{title}</S.Title>
      </S.ImageBox>
      <S.Description>{description}</S.Description>
      <S.Value>{formatPrice(price)}</S.Value>
      <S.Available>
        <S.Title>{isAvailable === 1 ? "Disponivel" : "Indisponivel"}</S.Title>
        <Button onClick={handleChangeProductAvailable}>
          {isAvailable === 1 ? "Deixar Indisponivel" : "Deixar Disponivel"}
        </Button>
      </S.Available>
      <S.ButtonWrapper>
        <Link
          href={{
            pathname: "/[companyId]/home/produtos/atualizar-produto/[id]",
            query: { companyId, id },
          }}
        >
          <S.UpdateProduct>
            <MdModeEdit size="25px" />
          </S.UpdateProduct>
        </Link>

        <S.RemoveProduct onClick={HandleDeleteProduct}>
          <MdDelete size="25px" />
        </S.RemoveProduct>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export { DashboardCard };
