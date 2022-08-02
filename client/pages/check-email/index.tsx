import { NextPage } from "next";
import CheckEmailForm from "../../components/check-email/CheckEmailForm";
import CheckEmailHeader from "../../components/reusuable/SignUpLogInHeader";

const CheckEmail: NextPage = () => {
  return (
    <>
      <CheckEmailHeader />
      <CheckEmailForm />
    </>
  );
};

export default CheckEmail;
