import { Formik, Form } from "formik";
import { NextPage } from "next";
import Link from "next/link";
import ButtonWithIcon from "../reusuable/ButtonWithIcon";
import FormCheckboxField from "../reusuable/FormCheckboxField";
import FormInputField from "../reusuable/FormInputField";

const LogInForm: NextPage = () => {
  return (
    <>
      <div className="w-3/12 min-w-[300px] mx-auto mt-15">
        <h1 className="text-3xl text-black-900 font-semibold text-center mb-4">
          Sign In
        </h1>
        <h1 className="text-l text-black-900 font-semibold text-center mb-12">
          Welcome back, you’ve been missed!
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
          <hr className="w-full opacity-50"></hr>
          <p className="font-semibold text-black-900">OR</p>
          <hr className="w-full opacity-50"></hr>
        </div>
        <br></br>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberUser: false,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <FormInputField
              inputiconpath="icons/mail-@"
              name="email"
              placeholder="Enter your email"
            ></FormInputField>
            <br></br>
            <FormInputField
              inputiconpath="icons/lock"
              name="password"
              placeholder="Enter your password"
            ></FormInputField>

            <div className="flex mt-[20px] px-2 justify-between items-center">
              <div>
                <FormCheckboxField
                  name="rememberUser"
                  label="Remember Me"
                ></FormCheckboxField>
              </div>
              <p className="text-black-900 font-semibold text-sm">
                <Link href="/forgot-password">
                  <a>Forgot password?</a>
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 mt-5 py-5 rounded-lg text-grey-100 font-semibold"
            >
              Sign In
            </button>
          </Form>
        </Formik>
        <div className="flex mt-[30px] justify-center">
          <p className="mr-[15px] text-black-900 font-semibold font-[16px]">
            You haven{`'`}t any account?
          </p>
          <p className="text-blue-500 font-semibold">
            <Link href="/sign-up">
              <a>Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
