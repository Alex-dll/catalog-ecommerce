import React from "react";
import { Card } from "../index";

import img from "../../../../public/noimageavailable.svg";

import * as S from "./styles";

type HighlightsProps = {
  products: NewProducts;
};

const Highlights: React.FC<HighlightsProps> = ({
  products,
}: HighlightsProps) => {
  return (
    <S.Container>
      <S.Row>
        {products?.slice(0, 3).map((product) => (
          <S.Column key={product.id}>
            <Card
              productId={product.id}
              image={product.image ? product.image : img}
              alt={product.description}
              width="700"
              height="900"
              title={product.title}
              price={product.price}
            />
          </S.Column>
        ))}
      </S.Row>
    </S.Container>
  );
};

export { Highlights };
