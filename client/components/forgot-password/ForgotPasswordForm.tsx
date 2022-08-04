import { Formik, Form } from "formik";
import { NextPage } from "next";
import FormInputField from "../reusuable/FormInputField";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordForm: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-3/12 min-w-[300px] mx-auto mt-15">
        <h1 className="text-3xl text-black-900 font-semibold text-center mb-4">
          Forgot password?
        </h1>
        <h1 className="text-l text-black-900 font-semibold text-center mb-12">
          Enter your details to receive a rest link
        </h1>

        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            sessionStorage.setItem("name", values.email);
            router.push("/check-email");
          }}
        >
          <Form>
            <FormInputField
              inputiconpath="icons/mail-@"
              name="email"
              placeholder="Enter your email"
            ></FormInputField>

            <button
              type="submit"
              className="w-full bg-blue-500 mt-5 py-5 rounded-lg text-grey-100 font-semibold"
            >
              Send reset link
            </button>
            <Link href="/log-in">
              <a>
                <div className="flex mt-[20px] justify-center items-center">
                  <div className=" mr-[14px]">
                    <Image
                      src="icons/blue arrow left.png"
                      alt="Arrow"
                      width="6px"
                      height="10px"
                    />
                  </div>
                  <p className="text-blue-500 font-semibold text-[16px]">
                    Back to Sign In
                  </p>
                </div>
              </a>
            </Link>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
