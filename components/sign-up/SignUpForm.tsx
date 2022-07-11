import { Formik, Form } from "formik";

import FormInputField from "../reusuable/FormInputField";
import ButtonWithIcon from "../reusuable/ButtonWithIcon";

import Image from "next/image";

interface FormValues {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
}

const SignUpForm = () => {
  return (
    <div className="w-4/12 min-w-[300px] mx-auto mt-15">
      <h1 className="text-3xl text-darkgrey font-semibold text-center mb-7">
        Getting Started
      </h1>
      <h1 className="text-xl text-darkgrey font-thin text-center mb-10">
        Create an account to continue and connect with the people
      </h1>
      <div className="flex gap-10">
        <ButtonWithIcon>
          <Image
            src="/google.png"
            alt="Google logo"
            width="26px"
            height="16px"
          ></Image>
          <p className="font-semibold">Log in with Google</p>
        </ButtonWithIcon>
        <ButtonWithIcon>
          <Image
            src="/apple.png"
            alt="Google logo"
            width="20px"
            height="16px"
          ></Image>
          <p className="font-semibold">Log in with Google</p>
        </ButtonWithIcon>
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
