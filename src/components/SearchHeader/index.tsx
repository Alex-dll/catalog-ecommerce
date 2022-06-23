import { NavigatorsLink } from "components/NavigatorsLink";
import Link from "next/link";
import React from "react";

import * as S from "./styles";

type Props = {
  id: string;
};

const SearchHeader: React.FC<Props> = ({ id }: Props) => {
  return (
    <S.Container>
      <S.Box>
        <Link href={`${id}/carrinho`}>
          <S.Cart />
        </Link>
      </S.Box>
    </S.Container>
  );
};

export { SearchHeader };
