import { NextPage } from "next";
import Feed from "../components/main/Feed";
import FriendList from "../components/main/FriendList";
import MainHeader from "../components/main/Header";
import Sidebar from "../components/main/Sidebar";
const Test: NextPage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className="flex">
        <div className="w-2/12">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full mx-4">
          <Feed></Feed>
        </div>
        <div className="w-[25%]">
          <FriendList></FriendList>
        </div>
      </div>
    </>
  );
};

export default Test;
