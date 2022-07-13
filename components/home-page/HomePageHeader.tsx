import { NextPage } from "next";
import SearchBar from "./SearchBar";

const HomePageHeader: NextPage = () => {
  return (
    <>
      <div className="flex items-center pr-[30px] pl-[20px] justify-between h-[78px]">
        <div className="flex items-center">
          <img
            src="Logo.png"
            alt=""
            className="h-[28px] w-[118px] mr-[100px]"
          />
          <SearchBar />
        </div>
        <div className="flex gap-[20px] items-center">
          <p className="text-[16px] text-grey font-semibold">Salem Ahmed</p>
          <img src="profile-picture.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePageHeader;
