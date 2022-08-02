import { NextPage } from "next";
import ForgotPasswordForm from "../../components/forgot-password/ForgotPasswordForm";
import ForgotPasswordHeader from "../../components/reusuable/SignUpLogInHeader";

const ForgotPassword: NextPage = () => {
  return (
    <>
      <ForgotPasswordHeader />
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPassword;
