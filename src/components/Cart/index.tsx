import React from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import Image from "next/image";
import { useCart } from "hooks/useCart";
import { formatPrice } from "services/format";
import { Container, ProductTable, Total } from "./styles";
import { Header } from "components";
import { CatalogAtCompanyProps } from "types";
import { useRouter } from "next/router";

import img from "/public/noimageavailable.svg";

interface Props {
  corporateName: string;
  catalogCompany: CatalogAtCompanyProps;
}

function Cart({ corporateName, catalogCompany }: Props) {
  const { cart, removeProduct } = useCart();
  const { query } = useRouter();

  const id = query.id;

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * 1),
  }));

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * 1;
    }, 0)
  );

  function handleRemoveProduct(productId: string) {
    removeProduct(productId);
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
              <th>QTD</th>
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
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>

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
