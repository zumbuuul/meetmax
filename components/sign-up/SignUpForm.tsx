import { Formik, Form } from "formik";
import Link from "next/link";

import FormInputField from "../reusuable/FormInputField";
import ButtonWithIcon from "../reusuable/ButtonWithIcon";

interface FormValues {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
}

const SignUpForm = () => {
  return (
    <div className="w-3/12 min-w-[300px] mx-auto mt-15">
      <h1 className="text-3xl text-darkgrey font-semibold text-center mb-4">
        Getting Started
      </h1>
      <h1 className="text-l text-darkgrey font-semibold text-center mb-12">
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
        <hr className="w-full "></hr>
        <p className="font-semibold text-darkgrey">OR</p>
        <hr className="w-full"></hr>
      </div>

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
          <FormInputField
            inputiconpath="smile"
            name="name"
            placeholder="Enter your name"
          ></FormInputField>
          <FormInputField
            inputiconpath="lock"
            name="password"
            placeholder="Enter your password"
          ></FormInputField>
          <button
            type="submit"
            className="w-full bg-skyblue mt-5 py-5 rounded-lg text-dirtywhite font-semibold"
          >
            Sign Up
          </button>
          <span className="text-darkgrey font-medium text-center w-full inline-block mt-2">
            Already have an account?
            <Link href="/log-in">
              <a className="text-skyblue font-semibold ml-10">Sign in</a>
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
