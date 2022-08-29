import { NextPage } from "next";
import Image from "next/image";
import Feed from "../../../../components/main/Feed";
import FeedPost from "../../../../components/main/feed/FeedPost";
import MainHeader from "../../../../components/main/Header";
import Sidebar from "../../../../components/main/Sidebar";

const UserPost: NextPage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className="flex">
        <div className="w-2/12">
          <Sidebar></Sidebar>
        </div>
        <div className="w-6/12">
          <FeedPost></FeedPost>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div>
                <Image
                  src="/profileimage.png"
                  width="42px"
                  height="42px"
                  alt=""
                  className="rounded-full"
                ></Image>
              </div>

              <div className="w-10/12">
                <input
                  type="text"
                  placeholder="pavle"
                  className="bg-grey-300 p-3 rounded-lg w-full"
                ></input>
              </div>

              <div className="bg-blue-100 w-[50px] h-[50px] rounded-lg flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.609192 0.0464914L15.7872 7.67111C15.8516 7.70352 15.9054 7.75113 15.9428 7.80898C15.9803 7.86683 16 7.9328 16 8C16 8.0672 15.9803 8.13316 15.9428 8.19102C15.9054 8.24887 15.8516 8.29648 15.7872 8.32889L0.609192 15.9535C0.546607 15.985 0.47613 16.001 0.404708 16C0.333286 15.9989 0.263385 15.981 0.201894 15.9478C0.140403 15.9146 0.089444 15.8673 0.0540409 15.8106C0.0186378 15.754 1.22294e-05 15.6899 0 15.6246V0.375385C1.22294e-05 0.310143 0.0186378 0.24603 0.0540409 0.189365C0.089444 0.1327 0.140403 0.0854393 0.201894 0.0522411C0.263385 0.0190429 0.333286 0.00105307 0.404708 4.48448e-05C0.47613 -0.000963385 0.546607 0.0150448 0.609192 0.0464914ZM1.64424 8.7509V13.7196L13.0306 8L1.64424 2.28041V7.2491H5.75485V8.7509H1.64424Z"
                    fill="white"
                  />
                  <path
                    d="M0.609192 0.0464914L15.7872 7.67111C15.8516 7.70352 15.9054 7.75113 15.9428 7.80898C15.9803 7.86683 16 7.9328 16 8C16 8.0672 15.9803 8.13316 15.9428 8.19102C15.9054 8.24887 15.8516 8.29648 15.7872 8.32889L0.609192 15.9535C0.546607 15.985 0.47613 16.001 0.404708 16C0.333286 15.9989 0.263385 15.981 0.201894 15.9478C0.140403 15.9146 0.089444 15.8673 0.0540409 15.8106C0.0186378 15.754 1.22294e-05 15.6899 0 15.6246V0.375385C1.22294e-05 0.310143 0.0186378 0.24603 0.0540409 0.189365C0.089444 0.1327 0.140403 0.0854393 0.201894 0.0522411C0.263385 0.0190429 0.333286 0.00105307 0.404708 4.48448e-05C0.47613 -0.000963385 0.546607 0.0150448 0.609192 0.0464914ZM1.64424 8.7509V13.7196L13.0306 8L1.64424 2.28041V7.2491H5.75485V8.7509H1.64424Z"
                    fill="#4E5D78"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPost;
