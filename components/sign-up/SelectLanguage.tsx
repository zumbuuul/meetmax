import { NextPage } from "next";

const SelectLanguage: NextPage = () => {
  return (
    <div className="h-10 w-40 flex items-center bg-blue-500 shadow-sm rounded">
      <p className="ml-5 mr-5 text-grey text-sm opacity-60">English (UK)</p>
      <img src="arrow.png" className="" />
    </div>
  );
};

export default SelectLanguage;
