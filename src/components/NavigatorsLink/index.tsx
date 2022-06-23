import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  path: string;
  text?: string;
  font?: string;
};

function NavigatorsLink({ path, text, font = "2rem" }: Props) {
  return (
    <S.Container>
      <S.Navigators href={`${path}`}>
        <S.Text style={{ fontSize: `${font}` }}>{text}</S.Text>
      </S.Navigators>
    </S.Container>
  );
}

export { NavigatorsLink };
