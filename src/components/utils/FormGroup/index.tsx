import React, { ReactNode } from "react";

import * as S from "./styles";

type Props = {
  children: ReactNode;
  error?: string | null;
};

function FormGroup({ children, error = null }: Props) {
  return (
    <S.Container>
      {children}
      {error && <small>{error}</small>}
    </S.Container>
  );
}

export { FormGroup };
