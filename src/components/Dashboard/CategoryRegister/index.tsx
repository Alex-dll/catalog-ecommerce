import { NextRouter, useRouter } from "next/router";
import React, { useState } from "react";

import { FormGroup } from "components";
import Button from "components/utils/Button";
import Input from "components/utils/Input";
import useErrors from "hooks/useErrors";

import * as S from "./styles";
import { createCategory } from "utils/http";
import { toast } from "react-toastify";

interface WithRouterProps {
  router?: NextRouter;
}

interface Props extends WithRouterProps {
  buttonLabel: string;
}

const CategoryRegister: React.FC<Props> = ({
  buttonLabel = "Register",
}: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const router: NextRouter = useRouter();

  const { query } = useRouter();
  const id = query.id;

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  function handleNameChange(event: any) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome da categoria é obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handleDescriptionChange(event: any) {
    setDescription(event.target.value);

    if (!event.target.value) {
      setError({
        field: "description",
        message: "Descrição da categoria é obrigatório",
      });
    } else {
      removeError("description");
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    let category = {
      name,
      description,
      companyId: String(id),
    };

    try {
      createCategory(category);
      toast.success("Categoria cadastrada com sucesso! 🙂", {
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
      toast.error("Não foi possivel cadastrar a categoria! 😢", {
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

export { CategoryRegister };
