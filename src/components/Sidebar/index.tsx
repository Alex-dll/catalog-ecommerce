import { useRouter } from "next/router";

import * as S from "./styles";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const { query } = useRouter();
  const id = query.id;
  console.log(id);

  return (
    <S.Container>
      <Link
        href={{
          pathname: "/[id]/home",
          query: { id },
        }}
      >
        <a>Empresa</a>
      </Link>
      <Link
        href={{
          pathname: "/[id]/home/produtos",
          query: { id },
        }}
      >
        <a>Produtos</a>
      </Link>
      <Link
        href={{
          pathname: "/[id]",
          query: { id },
        }}
      >
        <a>Seu Catalogo</a>
      </Link>
    </S.Container>
  );
};

export { Sidebar };
