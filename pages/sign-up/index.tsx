import { NextPage } from "next";

import SingUpHeader from "../../components/reusuable/SignUpLogInHeader";
import SignUpForm from "../../components/sign-up/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <>
      <SingUpHeader />
      <SignUpForm></SignUpForm>
    </>
  );
};
export default SignUp;
