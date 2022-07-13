import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

import Image from "next/image";
import { useCart } from "hooks/useCart";
import { formatPrice } from "services/format";
import { Container, ProductTable, Total } from "./styles";
import { Header } from "components";
import { CatalogAtCompanyProps } from "types";
import { NextRouter, useRouter } from "next/router";

import img from "/public/noimageavailable.svg";
import { useQuery } from "react-query";
import { getProducts } from "utils/http";
import { convertToWhatsappMessages } from "services/convertToWhatsappMessages";

interface Props {
  corporateName: string;
  catalogCompany: CatalogAtCompanyProps;
}

function Cart({ corporateName, catalogCompany }: Props) {
  const [products, setProducts] = useState<NewProducts>([]);
  const { cart, removeProduct } = useCart();

  const router: NextRouter = useRouter();
  const { query } = useRouter();

  const id = query.id;

  const { data } = useQuery([`productsCart`, cart], () => getProducts(cart));

  useEffect(() => {
    if (data !== undefined) {
      setProducts(data);
    }
  }, [data]);

  const cartFormatted = products.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * 1),
  }));

  const total = formatPrice(
    products.reduce((sumTotal, product) => {
      return sumTotal + product.price * 1;
    }, 0)
  );

  function handleRemoveProduct(productId: string) {
    removeProduct(productId);
  }

  function handleSendMessage() {
    const productsToMessage = products.map((product) => `${product.title}%0a`);

    const productsToMessageWhiteComma = productsToMessage
      .toString()
      .replace(/,/g, "");

    const text = convertToWhatsappMessages({
      message: `Olá, ${corporateName}! meu pedido:%0a%0a${productsToMessageWhiteComma}%0aCom um Total: ${total}`,
    });

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${556194170022}&text=${text}`;

    router.push(whatsappUrl);
  }

  return (
    <>
      <Header corporateName={corporateName} id={String(id)} />
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th aria-label="product image" />
              <th>PRODUTO</th>
              <th>VALOR</th>
              <th>SUBTOTAL</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {cartFormatted.map((product) => (
              <tr key={product.id}>
                <td>
                  <Image
                    src={product.image ? product.image : img}
                    alt={product.description}
                    width={50}
                    height={50}
                  />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <strong>{product.subTotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleRemoveProduct(String(product.id))}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button type="button" onClick={handleSendMessage}>
            Finalizar pedido
          </button>

          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
}

export { Cart };
