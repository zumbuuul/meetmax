import { Formik, Form } from "formik";
import { NextPage } from "next";
import FormInputField from "../reusuable/FormInputField";

const ForgotPasswordForm: NextPage = () => {
  return (
    <>
      <div className="w-3/12 min-w-[300px] mx-auto mt-15">
        <h1 className="text-3xl text-darkgrey font-semibold text-center mb-4">
          Forgot password?
        </h1>
        <h1 className="text-l text-darkgrey font-semibold text-center mb-12">
          Enter your details to receive a rest link
        </h1>

        <Formik
          initialValues={{
            email: "",
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

            <button
              type="submit"
              className="w-full bg-skyblue mt-5 py-5 rounded-lg text-dirtywhite font-semibold"
            >
              Send
            </button>
            <a href="#">
              <div className="flex mt-[20px] justify-center items-center">
                <img
                  src="blue arrow left.png"
                  alt=""
                  className="h-[10px] w-[6px] mr-[14px]"
                />
                <p className="text-skyblue font-semibold text-[16px]">
                  Back to Sign In
                </p>
              </div>
            </a>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
