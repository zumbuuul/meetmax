import { NextPage } from "next";
import Feed from "../components/main/Feed";
import FriendList from "../components/main/FriendList";
import MainHeader from "../components/main/Header";
import Sidebar from "../components/main/Sidebar";
const Test: NextPage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className="flex h-full w-full">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <FriendList></FriendList>
      </div>
    </>
  );
};

export default Test;
