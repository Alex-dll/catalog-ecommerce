import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { FormGroup } from "components";
import Button from "components/utils/Button";
import Input from "components/utils/Input";
import Select from "components/utils/Select";
import useErrors from "hooks/useErrors";

import * as S from "./styles";
import { updateProduct, getCategories, getProductById } from "utils/http";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

interface WithRouterProps {
  router?: NextRouter;
}

interface Props extends WithRouterProps {
  buttonLabel: string;
}

const ProductsUpdate: React.FC<Props> = ({
  buttonLabel = "Atualizar",
}: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState<File>();
  const [image64, setImage64] = useState("");

  const [available, setAvailable] = useState(1);
  const [category, setCategory] = useState("");

  const router: NextRouter = useRouter();

  const { query } = useRouter();

  const id = query.id;
  const productId = query.product;

  const product = useQuery([`categories`, productId], () =>
    getProductById(String(productId))
  );

  const catalog = useQuery([`categories`, id], () => getCategories(String(id)));

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  useEffect(() => {
    setName(String(product?.data?.title));
    setDescription(String(product?.data?.description));
    setPrice(Number(product?.data?.price));
    setImage64(String(product?.data?.image));
    setCategory(String(product?.data?.category));
  }, [product.data]);

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

  function handlePriceChange(event: any) {
    setPrice(event.target.value);

    if (!event.target.value) {
      setError({ field: "price", message: "Preço do produto é obrigatório" });
    } else {
      removeError("price");
    }
  }

  function handleImageChange(event: any) {
    setImage(event.target.files[0]);
    let base64code = "";

    const onLoad = (fileString: any) => {
      base64code = fileString;
      setImage64(base64code);
    };

    const getBase64 = (file: any) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        onLoad(reader.result);
      };
    };
    const files = event.target.files;
    const file = files[0];
    getBase64(file);
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    let produto = {
      title: name,
      description,
      price,
      image: image64,
      available,
      productCategoryId: category,
      companyId: String(id),
    };

    try {
      updateProduct(produto);
      toast.success("Produto cadastrado com sucesso! 🙂", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push(`/${id}/home/produtos`);
    } catch (e) {
      toast.error("Não foi possivel cadastrar o produto! 😢", {
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

      <FormGroup error={getErrorMessageByFieldName("price")}>
        <Input
          type="number"
          error={getErrorMessageByFieldName("price")}
          placeholder="Preço do produto *"
          value={price}
          onChange={handlePriceChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("image")}>
        <Input
          type="file"
          error={getErrorMessageByFieldName("image")}
          placeholder="Imagem do produto *"
          onChange={handleImageChange}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>

          {catalog?.data?.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
};

export { ProductsUpdate };
