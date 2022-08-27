import { NextPage } from "next";
import MainHeader from "../../components/main/Header";
import Sidebar from "../../components/main/Sidebar";

const MyCommunity: NextPage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className="flex">
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default MyCommunity;
