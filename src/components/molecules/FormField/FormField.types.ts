export type FormFieldType = "text" | "email" | "tel" | "textarea" | "select";

export type FormFieldProps = {
  label: string;
  name: string;
  type?: FormFieldType;
  options?: string[];
  required?: boolean;
};
