import { useState } from "react";

type Props = {
  field: string;
  message: string;
};



export default function useErrors() {
  const [errors, setErrors] = useState(Array<any>);

  function setError({ field, message }: Props) {
    const errorAlreadyExists = errors.find((error) => error === "email");

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error: any) => error.field !== fieldName)
    );
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error: any) => error.field === fieldName)?.message;
  }

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors,
  };
}
