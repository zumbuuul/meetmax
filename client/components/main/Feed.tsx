import { NextPage } from "next";
import FeedPost from "./feed/FeedPost";
import FeedSideCard from "./feed/FeedSideCard";

const Feed: NextPage = () => {
  return (
    <div className="w-full h-[500vh] bg-grey-300 rounded-lg flex">
      <div className="w-full h-[100vh] m-5 rounded-lg flex flex-col gap-y-[8vh]">
        <FeedPost></FeedPost>
        <FeedPost></FeedPost>
      </div>
      <div className="w-5/12 h-full hidden laptop:flex m-5 rounded-lg flex-row">
        <FeedSideCard></FeedSideCard>
      </div>
    </div>
  );
};

export default Feed;
