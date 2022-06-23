import Image from "next/image";

import { useCart } from "hooks/useCart";
import img from "../../../../public/noimageavailable.svg";

import { BsEye } from "react-icons/bs";
import * as S from "./styles";

type PropsImage = {
  image: string;
  alt: string;
  width: string;
  height: string;
  title: string;
  price: number;
  productId: string;
};

const Card: React.FC<PropsImage> = ({
  image,
  alt,
  width,
  height,
  title,
  price,
  productId,
}) => {
  const { addProduct } = useCart();
  return (
    <S.Card>
      <S.Box className="card-box">
        <Image
          className="img-fallback"
          src={image ? image : img}
          alt={alt}
          width={width}
          height={height}
        />

        <S.Actions className="card-actions">
          <S.Icon>
            <BsEye className="icon" />
          </S.Icon>
        </S.Actions>
        <S.BuyButton onClick={() => addProduct(productId)}>
          Adicionar ao carrinho
        </S.BuyButton>
      </S.Box>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.Card>
  );
};

export { Card };
