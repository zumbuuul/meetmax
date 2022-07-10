import { NextPage } from "next";
import SelectLanguage from "./SelectLanguage";

const SingUpHeader: NextPage = () => {
  return (
    <div className="h-20 flex items-center w-screen justify-between px-8">
      <img src="Logo.png" className="h-7" alt="" />
      <SelectLanguage />
    </div>
  );
};

export default SingUpHeader;
