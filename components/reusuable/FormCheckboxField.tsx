import { NextPage } from "next";
import { Field } from "formik";

interface FormCheckboxFieldProps {
  label?: string;
  name: string;
}

const FormCheckboxField: NextPage<FormCheckboxFieldProps> = ({
  label,
  name,
}) => {
  return (
    <>
      <Field type="checkbox" name={name} />
      <label
        htmlFor={name}
        className="ml-[12px] text-grey font-semibold text-sm"
      >
        {label}
      </label>
    </>
  );
};

export default FormCheckboxField;
