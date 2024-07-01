import { FieldError, FieldValue, FieldValues, UseFormRegister } from "react-hook-form";

  export type FormFieldProps = {
    type?: string;
      name: string;
      label?: string;
    placeholder?: string;
    valueAsNumber?: boolean;
    error?: FieldError | undefined;
    labelError?: FieldError | undefined;
    register: UseFormRegister<FieldValue<any>>;
  };