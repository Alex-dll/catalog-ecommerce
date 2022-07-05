import Button from "components/utils/Button";
import Image from "next/image";
import React, { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { formatPrice } from "services/format";
import { deleteProduct, updateProductAvailableById } from "utils/http";

import * as S from "./styles";

import imageFallback from "/public/noimageavailable.svg";

type DashboardCardProps = {
  id: string;
  title: string;
  price: number;
  description: string;
  available: number;
  image: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  id,
  title,
  price,
  description,
  available,
  image,
}: DashboardCardProps) => {
  const availableItem = available === 1 ? true : false;

  const [isAvailable, setIsAvailable] = useState(availableItem);
  const queryClient = useQueryClient();

  function handleDeleteProduct() {
    try {
      deleteProduct(id);
      queryClient.invalidateQueries("products");
      toast.success("Produto deletado com sucesso! 🙂", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
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

  function handleChangeProductAvailable() {
    try {
      setIsAvailable((prevState) => !prevState);
      console.log(isAvailable);
      updateProductAvailableById(id, isAvailable === true ? 1 : 0);

      queryClient.invalidateQueries("products");
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
        <S.Title>{isAvailable ? "Disponivel" : "Indisponivel"}</S.Title>
        <Button onClick={handleChangeProductAvailable}>
          {isAvailable ? "Deixar Indisponivel" : "Deixar Disponivel"}
        </Button>
      </S.Available>
      <S.ButtonWrapper>
        <S.UpdateProduct>
          <MdModeEdit size="25px" />
        </S.UpdateProduct>
        <S.RemoveProduct onClick={handleDeleteProduct}>
          <MdDelete size="25px" />
        </S.RemoveProduct>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export { DashboardCard };
