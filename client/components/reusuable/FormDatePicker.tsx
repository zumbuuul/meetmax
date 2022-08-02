import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";

interface FormInputFieldProps {
  label?: string;
  name: string;
  placeholder: string;
  inputiconpath: string;
}

const FormDatePicker = ({ label, ...props }: FormInputFieldProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props.name);
  console.log(new Date());
  return (
    <div className="relative">
      <label htmlFor={label}>{label}</label>
      <div className="absolute z-10 top-3 left-3">
        <Image
          src={`/${props.inputiconpath}.png`}
          width="16px"
          height="16px"
          alt="calendar"
        ></Image>
      </div>
      <DatePicker
        placeholderText={props.placeholder}
        {...field}
        selected={field.value || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        showYearDropdown
        yearDropdownItemNumber={100}
        scrollableYearDropdown
      />
    </div>
  );
};

export default FormDatePicker;
