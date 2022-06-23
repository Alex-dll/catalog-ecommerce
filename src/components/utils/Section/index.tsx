import React, { ReactNode } from "react";

import * as S from "./styles";

type SectionProps = {
  children?: ReactNode;
  className?: string;
  paddingLg?: string;
  minH?: string;
  flex?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
  ...rest
}: SectionProps) => {
  return (
    <S.Section {...rest} className={className ? className : "section"}>
      {children}
    </S.Section>
  );
};

export { Section };
