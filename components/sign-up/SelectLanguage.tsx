import { NextPage } from "next";

const SelectLanguage: NextPage = () => {
  return (
    <div className="w-24 h-6 phone:h-10 phone:w-40 flex items-center shadow-sm rounded ">
      <p className="phone:ml-5 phone:mr-5 text-grey phone:text-sm opacity-60 text-xs text-[10px] ml-2.5 mr-2">
        English (UK)
      </p>
      <img
        src="arrow.png"
        className="phone:w-4 phone:h-2.5 w-[12] h-[6.75px] "
      />
    </div>
  );
};

export default SelectLanguage;
