import { NextPage } from "next";
import SelectLanguage from "./SelectLanguage";

const SingUpHeader: NextPage = () => {
  return (
    <div className="h-20 flex items-center w-screen justify-between px-8">
      <img
        src="Logo.png"
        className="phone:h-[28px] phone:w-[112px] w-[73px] h-[18px]"
        alt=""
      />
      <SelectLanguage />
    </div>
  );
};

export default SingUpHeader;
