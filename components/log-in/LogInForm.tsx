import { Formik, Form } from "formik";
import { NextPage } from "next";
import ButtonWithIcon from "../reusuable/ButtonWithIcon";
import FormInputField from "../reusuable/FormInputField";

const LogInForm: NextPage = () => {
  return (
    <>
      <div className="w-3/12 min-w-[300px] mx-auto mt-15">
        <h1 className="text-3xl text-darkgrey font-semibold text-center mb-4">
          Sign In
        </h1>
        <h1 className="text-l text-darkgrey font-semibold text-center mb-12">
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
          <hr className="w-full opacity-20"></hr>
          <p className="font-semibold text-darkgrey">OR</p>
          <hr className="w-full opacity-20"></hr>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
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
              inputiconpath="lock"
              name="password"
              placeholder="Enter your password"
            ></FormInputField>

            <div className="flex mt-[20px] px-2 justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="bg-checkboxgrey h-4 w-4 align-bottom relative top-[-4.5px] "
                />
                <span className="ml-[12px] text-grey font-semibold text-sm">
                  Remember me
                </span>
              </div>
              <p className="text-grey font-semibold text-sm">
                <a href="#">Forgot Password?</a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-skyblue mt-5 py-5 rounded-lg text-dirtywhite font-semibold"
            >
              Sign In
            </button>
          </Form>
        </Formik>
        <div className="flex mt-[30px] justify-center">
          <p className="mr-[15px] text-grey font-semibold font-[16px]">
            You haven't any account?
          </p>
          <p className="text-skyblue font-semibold">
            <a href="/sign-up">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInForm;