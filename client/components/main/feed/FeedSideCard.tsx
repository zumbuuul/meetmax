import { NextPage } from "next";
import Image from "next/image";

const FeedSideCard: NextPage = () => {
  return (
    <>
      <div className="bg-grey-100 sticky top-[100px] right-0 h-fit w-full rounded-lg">
        <div className="px-3 flex mx-2 justify-between my-2">
          <h1 className="text-md font-semibold">People you might know</h1>
          <span>See All</span>
        </div>
        <hr></hr>
        <div className="flex px-3 flex-col my-3 gap-y-10">
          <div>
            <div className="flex w-full">
              <div>
                <Image
                  src="/profileimage.png"
                  alt=""
                  width="42px"
                  height="42px"
                  className="rounded-full"
                ></Image>
              </div>
              <div className="w-[1vw]"></div>
              <div>
                <h1>Radovan SkillArena</h1>
                <h3 className="text-sm">Founder & CEO @ Trophy</h3>
              </div>
            </div>
            <div className="flex mt-5 justify-between gap-5">
              <button className="w-full border-grey-600 border-[1px] rounded-xl">
                Ignore
              </button>
              <button className="w-full bg-blue-500 py-3 rounded-xl text-grey-100 font-semibold">
                Follow
              </button>
            </div>
          </div>
          <div>
            <div className="flex w-full">
              <div>
                <Image
                  src="/profileimage.png"
                  alt=""
                  width="42px"
                  height="42px"
                  className="rounded-full"
                ></Image>
              </div>
              <div className="w-[1vw]"></div>
              <div>
                <h1>Radovan SkillArena</h1>
                <h3 className="text-sm">Founder & CEO @ Trophy</h3>
              </div>
            </div>
            <div className="flex mt-5 justify-between gap-5">
              <button className="w-full border-grey-600 border-[1px] rounded-xl">
                Ignore
              </button>
              <button className="w-full bg-blue-500 py-3 rounded-xl text-grey-100 font-semibold">
                Follow
              </button>
            </div>
          </div>
          <div>
            <div className="flex w-full">
              <div>
                <Image
                  src="/profileimage.png"
                  alt=""
                  width="42px"
                  height="42px"
                  className="rounded-full"
                ></Image>
              </div>
              <div className="w-[1vw]"></div>
              <div>
                <h1>Radovan SkillArena</h1>
                <h3 className="text-sm">Founder & CEO @ Trophy</h3>
              </div>
            </div>
            <div className="flex mt-5 justify-between gap-5">
              <button className="w-full border-grey-600 border-[1px] rounded-xl">
                Ignore
              </button>
              <button className="w-full bg-blue-500 py-3 rounded-xl text-grey-100 font-semibold">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedSideCard;
