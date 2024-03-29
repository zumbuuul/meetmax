import { Formik, Form } from "formik";
import Link from "next/link";
import Image from "next/image";

import FormInputField from "../reusuable/FormInputField";
import ButtonWithIcon from "../reusuable/ButtonWithIcon";
import FormDatePicker from "../reusuable/FormDatePicker";
import FormRadioInput from "../reusuable/FormRadioInput";

interface FormValues {
  name: string;
  email: string;
  password: string;
  dateOfBirth: any;
  gender: string;
}

const SignUpForm = () => {
  return (
    <div className="w-3/12 min-w-[300px] mx-auto mt-15">
      <h1 className="text-3xl text-black-900 font-semibold text-center mb-4">
        Getting Started
      </h1>
      <h1 className="text-l text-black-900 font-semibold text-center mb-12">
        Create an account to continue and connect with the people
      </h1>
      <div className="flex gap-5 flex-col laptop:flex-row laptop:gap-10">
        <ButtonWithIcon
          iconpath="google"
          text="Log in with Google"
        ></ButtonWithIcon>
        <ButtonWithIcon
          iconpath="apple"
          text="Log in with Apple"
        ></ButtonWithIcon>
      </div>

      <div className="flex items-center gap-5 mt-8 ">
        <hr className="w-full opacity-20"></hr>
        <p className="font-semibold text-black-900  ">OR</p>
        <hr className="w-full opacity-20"></hr>
      </div>
      <br></br>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          dateOfBirth: "",
          gender: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <FormInputField
            inputiconpath="mail-@"
            name="email"
            placeholder="Enter your email"
          ></FormInputField>
          <br></br>
          <FormInputField
            inputiconpath="smile"
            name="name"
            placeholder="Enter your name"
          ></FormInputField>
          <br></br>
          <FormInputField
            inputiconpath="lock"
            name="password"
            placeholder="Enter your password"
          ></FormInputField>
          <div className="mt-5 flex gap-5">
            <div>
              <FormDatePicker
                name="dateOfBirth"
                inputiconpath="icons/calendar"
                placeholder="Enter your birthday"
              />
            </div>
            <div className="border-grey-600 border-2 py-2 rounded-lg w-full relative">
              <div className="absolute top-3 left-3">
                <Image
                  src="/icons/gender.png"
                  width="16px"
                  height="16px"
                  alt="gender"
                ></Image>
              </div>
              <div className="h-full flex items-center gap-2 ml-[7vh]">
                <FormRadioInput
                  value="male"
                  name="gender"
                  label="Male"
                ></FormRadioInput>
                <FormRadioInput
                  value="female"
                  name="gender"
                  label="Female"
                ></FormRadioInput>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 mt-5 py-5 rounded-lg text-grey-100 font-semibold"
          >
            Sign Up
          </button>
          <span className="text- font-medium text-center w-full inline-block mt-2">
            Already have an account?
            <Link href="/log-in">
              <a className="text-blue-500 font-semibold ml-10">Sign in</a>
            </Link>
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;

/* <Formik
        initialValues={{ name: "" }}
        validate={validate}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            console.log;
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        <Form>
          <Field name="name">
            {({
              field,
              form: {},
              meta,
            }: {
              field: any;
              form: any;
              meta: any;
            }) => (
              <div>
                <input type="text" placeholder="name" {...field} />
                {meta.touched && meta.error && <div>{meta.error}</div>}
              </div>
            )}
          </Field>
        </Form>
      </Formik>
*/
