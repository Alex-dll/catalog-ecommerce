import { NextRouter, useRouter } from "next/router";

type Props = {
  message?: string;
};

const convertToWhatsappMessages = ({ message = "Hello, world!" }: Props) => {
  const messageWithoutSpaces = message.replace(/ /g, "+");

  return messageWithoutSpaces;
};

export { convertToWhatsappMessages };
