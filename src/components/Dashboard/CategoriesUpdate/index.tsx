import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { FormGroup } from "components";
import Button from "components/utils/Button";
import Input from "components/utils/Input";
import Select from "components/utils/Select";
import useErrors from "hooks/useErrors";

import * as S from "./styles";
import { updateCategory, getCategoryById } from "utils/http";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

interface WithRouterProps {
  router?: NextRouter;
}

interface Props extends WithRouterProps {
  buttonLabel: string;
}

const CategoriesUpdate: React.FC<Props> = ({
  buttonLabel = "Atualizar",
}: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [idCategory, setIdCategory] = useState("");

  const router: NextRouter = useRouter();

  const { query } = useRouter();

  const id = query.id;
  const categoryId = query.category;

  const { data } = useQuery([`categories`, categoryId], () =>
    getCategoryById(String(categoryId))
  );

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  useEffect(() => {
    setName(String(data?.name));
    setDescription(String(data?.description));
    setIdCategory(String(data?.id));

    console.log(data);
  }, [data]);

  function handleNameChange(event: any) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome do produto é obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handleDescriptionChange(event: any) {
    setDescription(event.target.value);

    if (!event.target.value) {
      setError({
        field: "description",
        message: "Descrição do produto é obrigatório",
      });
    } else {
      removeError("description");
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    let categoryToUpdate = {
      id: String(categoryId),
      name,
      description,
      productCategoryId: idCategory,
    };

    try {
      updateCategory(categoryToUpdate);
      toast.success("Categoria atualizada com sucesso! 🙂", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push(`/${id}/home/categorias`);
    } catch (e) {
      toast.error("Não foi possivel atualizar a categoria! 😢", {
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
    <S.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          error={getErrorMessageByFieldName("name")}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("description")}>
        <Input
          error={getErrorMessageByFieldName("description")}
          placeholder="Descrição *"
          value={description}
          onChange={handleDescriptionChange}
        />
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
};

export { CategoriesUpdate };
