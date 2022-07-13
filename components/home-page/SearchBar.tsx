import { NextPage } from "next";

const SearchBar: NextPage = () => {
  return (
    <>
      <div>
        <img
          src="lens.png"
          alt=""
          className="absolute ml-[20px] mt-[13px] z-50"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for something here..."
          className="border border-trasparentgrey rounded-lg relative w-[542px] h-[42px] pl-[46px] text-[#4E5D78CC]"
        />
      </div>
    </>
  );
};

export default SearchBar;
