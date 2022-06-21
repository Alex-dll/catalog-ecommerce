import React, { ReactNode } from "react";

// import { Container } from './styles';

type HeadingProps = {
  children?: ReactNode;
  type?: string;
  className?: string;
  align?: string;
};

type ElementProps = any;

const elements: ElementProps = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const Heading: React.FC<HeadingProps> = ({
  type = "h1",
  children,
  ...rest
}: HeadingProps) => {
  return React.createElement(elements[type] || elements.h1, rest, children);
};

export { Heading };
