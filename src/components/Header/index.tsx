import { NavigatorsLink, SearchHeader } from "components";
import * as S from "./styles";

type HeaderProps = {
  corporateName: string;
  id: string;
};

const Header: React.FC<HeaderProps> = ({ corporateName, id }: HeaderProps) => {
  return (
    <S.Header>
      <S.Container>
        <NavigatorsLink path={`/${id}`} text={corporateName} />
        <SearchHeader id={String(id)} />
      </S.Container>
    </S.Header>
  );
};

export { Header };
