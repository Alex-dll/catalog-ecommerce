import { ReactNode } from "react";
import * as S from "./styles";

type TitleBoxProps = {
  children?: ReactNode;
  mb?: string;
  align?: string;
  className?: string;
};

const TitleBox = ({ children, ...rest }: TitleBoxProps) => {
  return <S.TitleBox {...rest}>{children}</S.TitleBox>;
};

export { TitleBox };
