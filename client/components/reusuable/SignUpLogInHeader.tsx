import { NextPage } from "next";
import SelectLanguage from "../sign-up/SelectLanguage";
import Image from "next/image";

const SingUpHeader: NextPage = () => {
  return (
    <div className="h-20 flex items-center w-screen justify-between px-8">
      {/* koristi next/image kad ubacujes slike u next, vidis da te i vsc smara da ne smes da koristis <img> */}

      <Image
        src="/Logo.png"
        alt="Meetmax logo"
        width="112px"
        height="28px"
      ></Image>

      <SelectLanguage />
    </div>
  );
};

export default SingUpHeader;
