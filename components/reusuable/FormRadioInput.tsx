import { Field } from "formik";

interface FormInputFieldProps {
  label?: string;
  name: string;
  value: string;
}

const FormRadioInput = ({ label, ...props }: FormInputFieldProps) => {
  return (
    <>
      <Field type="radio" name={props.name} value={props.value}></Field>
      <label className="text-darkgrey font-medium" htmlFor={props.name}>
        {label}
      </label>
    </>
  );
};

export default FormRadioInput;
