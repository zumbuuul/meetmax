import { NextPage } from "next";

const SelectLanguage: NextPage = () => {
  return (
    <div className="w-34 h-8 flex items-center shadow-sm rounded ">
      <select className=" text-grey phone:text-sm opacity-60 text-xs text-[10px] ml-2.5 mr-2 px-2 py-1.5">
        <option>English (UK)</option>
        <option>Serbian (SR)</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
