import { NextPage } from "next";
import Image from "next/image";

const FeedSideCard: NextPage = () => {
  return (
    <>
      <div className="bg-grey-100 p-5 sticky top-[5rem] right-0 h-fit w-full rounded-lg">
        <div className=" flex mx-2 justify-between my-2">
          <h1>People you might know</h1>
          <span>See All</span>
        </div>
        <hr></hr>
        <div className="flex flex-col my-5">
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
            <div className="flex justify-between">
              <button>Ignore</button>
              <button>Follow</button>
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
            <div className="flex justify-between">
              <button>Ignore</button>
              <button>Follow</button>
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
            <div className="flex justify-between">
              <button>Ignore</button>
              <button>Follow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedSideCard;
