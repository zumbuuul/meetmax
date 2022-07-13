import { NextPage } from "next";
import LogInForm from "../../components/log-in/LogInForm";
import LogInHeader from "../../components/reusuable/SignUpLogInHeader";

const LogIn: NextPage = () => {
  return (
    <>
      <LogInHeader />
      <LogInForm />
    </>
  );
};

export default LogIn;
