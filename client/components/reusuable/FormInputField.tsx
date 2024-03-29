import { useField } from "formik";
import Image from "next/image";

interface FieldValueProps {}

interface FormInputFieldProps {
  label?: string;
  name: string;
  placeholder: string;
  inputiconpath: string;
}

const FormInputField = ({ label, ...props }: FormInputFieldProps) => {
  const [field, meta] = useField(props.name);

  return (
    <>
      {label ? (
        <>
          <label htmlFor={props.name}>{label}</label>
          <br></br>
        </>
      ) : null}

      <div className="relative">
        <div className="absolute top-3 left-3">
          <Image
            src={`/${props.inputiconpath}.png`}
            width="16px"
            height="16px"
            alt="@"
          ></Image>
        </div>
        <input
          {...props}
          {...field}
          className="w-full border-[1px] rounded-lg border-grey-600 text-darkgrey py-2 pl-10"
        />
      </div>
      {meta.touched && meta.error ? (
        <p className="text-s text-red">{meta.error}</p>
      ) : null}
    </>
  );
};

export default FormInputField;
