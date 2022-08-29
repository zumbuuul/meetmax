import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const imgs: string[] = [
  "/profileimage.png",
  "/profileimage.png",
  "/profileimage.png",
  "/profileimage.png",
];
const imgs2: string[] = imgs.slice(0, 3);
const FeedPost: NextPage = () => {
  function test(t: string[]) {
    return t.map((val, index) => {
      return (
        <div key={index} className="absolute" style={{ left: index * 16 }}>
          <Image
            src={val}
            width="26px"
            height="26px"
            key={index}
            className={`rounded-full`}
            alt=""
          ></Image>
        </div>
      );
    });
  }

  const c = 1;

  return (
    <>
      <Link href="/pavle/post/1312">
        <div className="bg-grey-100 p-8 rounded-lg flex flex-col gap-5 text-grey-1100">
          <header className="flex items-start">
            <Image
              src="/profileimage.png"
              width="52px"
              alt=""
              height="52px"
              className="rounded-full"
            ></Image>
            <div className="ml-5">
              <p className="text-lg text-grey-1000">Name</p>
              <span className="text-sm text-grey-700">Time Type</span>
            </div>
            <div className="ml-auto">
              <Image
                src="/icons/Other.svg"
                width="16px"
                height="16px"
                alt=""
              ></Image>
            </div>
          </header>
          <main className="flex flex-col gap-y-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus assumenda tempora saepe totam atque autem sit. Eveniet
              ipsam aperiam quia eos velit rerum accusamus doloribus soluta! Eos
              consectetur facere dolore.
            </p>
            {false ? <div></div> : null}
            <div className="flex justify-between">
              <div className="relative w-full">
                {test(imgs2)}{" "}
                {imgs.length > 3 ? (
                  <div
                    className="absolute rounded-full w-[26px] h-[26px] bg-black-900 flex items-center justify-center"
                    style={{ left: 48 }}
                  >
                    <p className="text-grey-100 text-sm">+{imgs.length - 3}</p>
                  </div>
                ) : null}
              </div>
              <div className="w-full flex justify-end text-center">
                <span>{c ? `${c} Comments` : null}</span>
                &nbsp;&nbsp;&nbsp;
                <span className="text-center">2 Shares</span>
              </div>
            </div>
            <div>
              <hr className="opacity-30"></hr>
              <div className="flex justify-between my-2 font-medium ">
                <div className="flex gap-x-2 items-center hover:cursor-pointer ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5941 2.33069C16.4037 4.04841 16.4661 6.78403 14.7829 8.5684L7.99905 15L1.21678 8.5684C-0.466386 6.78403 -0.403187 4.04386 1.40558 2.33069C3.21754 0.615997 6.11589 0.558437 8.00066 2.15801C9.87982 0.560709 12.7838 0.613725 14.5941 2.33069V2.33069ZM2.53756 3.40237C1.34558 4.53085 1.28558 6.33718 2.38396 7.5308L7.99986 12.8559L13.6158 7.53156C14.7149 6.33718 14.6549 4.53312 13.4614 3.40085C12.2718 2.27237 10.3566 2.21784 9.09903 3.25998L5.7375 6.44321L4.60552 5.37229L6.86548 3.2312L6.79988 3.17894C5.5399 2.22087 3.69834 2.30266 2.53756 3.40237V3.40237Z"
                      fill="white"
                    />
                    <path
                      d="M14.5941 2.33069C16.4037 4.04841 16.4661 6.78403 14.7829 8.5684L7.99905 15L1.21678 8.5684C-0.466386 6.78403 -0.403187 4.04386 1.40558 2.33069C3.21754 0.615997 6.11589 0.558437 8.00066 2.15801C9.87982 0.560709 12.7838 0.613725 14.5941 2.33069V2.33069ZM2.53756 3.40237C1.34558 4.53085 1.28558 6.33718 2.38396 7.5308L7.99986 12.8559L13.6158 7.53156C14.7149 6.33718 14.6549 4.53312 13.4614 3.40085C12.2718 2.27237 10.3566 2.21784 9.09903 3.25998L5.7375 6.44321L4.60552 5.37229L6.86548 3.2312L6.79988 3.17894C5.5399 2.22087 3.69834 2.30266 2.53756 3.40237V3.40237Z"
                      fill="#4E5D78"
                    />
                  </svg>

                  <span>Like</span>
                </div>
                <div className="flex items-center gap-x-2 hover:cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.4 0H9.6C11.2974 0 12.9253 0.691573 14.1255 1.92258C15.3257 3.15359 16 4.82319 16 6.5641C16 8.30501 15.3257 9.97462 14.1255 11.2056C12.9253 12.4366 11.2974 13.1282 9.6 13.1282V16C5.6 14.359 0 11.8974 0 6.5641C0 4.82319 0.674284 3.15359 1.87452 1.92258C3.07475 0.691573 4.70261 0 6.4 0V0ZM8 11.4872H9.6C10.2303 11.4872 10.8545 11.3598 11.4369 11.1124C12.0192 10.865 12.5484 10.5024 12.9941 10.0452C13.4398 9.58809 13.7934 9.04538 14.0346 8.44808C14.2758 7.85079 14.4 7.21061 14.4 6.5641C14.4 5.91759 14.2758 5.27742 14.0346 4.68012C13.7934 4.08283 13.4398 3.54011 12.9941 3.08296C12.5484 2.62581 12.0192 2.26318 11.4369 2.01577C10.8545 1.76836 10.2303 1.64103 9.6 1.64103H6.4C5.12696 1.64103 3.90606 2.15971 3.00589 3.08296C2.10571 4.00622 1.6 5.25842 1.6 6.5641C1.6 9.52615 3.5696 11.4593 8 13.5221V11.4872Z"
                      fill="white"
                    />
                    <path
                      d="M6.4 0H9.6C11.2974 0 12.9253 0.691573 14.1255 1.92258C15.3257 3.15359 16 4.82319 16 6.5641C16 8.30501 15.3257 9.97462 14.1255 11.2056C12.9253 12.4366 11.2974 13.1282 9.6 13.1282V16C5.6 14.359 0 11.8974 0 6.5641C0 4.82319 0.674284 3.15359 1.87452 1.92258C3.07475 0.691573 4.70261 0 6.4 0V0ZM8 11.4872H9.6C10.2303 11.4872 10.8545 11.3598 11.4369 11.1124C12.0192 10.865 12.5484 10.5024 12.9941 10.0452C13.4398 9.58809 13.7934 9.04538 14.0346 8.44808C14.2758 7.85079 14.4 7.21061 14.4 6.5641C14.4 5.91759 14.2758 5.27742 14.0346 4.68012C13.7934 4.08283 13.4398 3.54011 12.9941 3.08296C12.5484 2.62581 12.0192 2.26318 11.4369 2.01577C10.8545 1.76836 10.2303 1.64103 9.6 1.64103H6.4C5.12696 1.64103 3.90606 2.15971 3.00589 3.08296C2.10571 4.00622 1.6 5.25842 1.6 6.5641C1.6 9.52615 3.5696 11.4593 8 13.5221V11.4872Z"
                      fill="#4E5D78"
                    />
                  </svg>

                  <span>Comments</span>
                </div>
                <div className="flex gap-x-2 items-center hover:cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.80488 10.4706H6.2439C4.96359 10.4701 3.7075 10.8388 2.61141 11.537C1.51533 12.2351 0.620957 13.2361 0.0249767 14.4318C0.00822477 14.2099 -0.000107147 13.9873 1.04009e-06 13.7647C1.04009e-06 9.21635 3.49424 5.52941 7.80488 5.52941V1L16 8L7.80488 15V10.4706ZM6.2439 8.82353H9.36585V11.5478L13.5188 8L9.36585 4.45224V7.17647H7.80488C6.90751 7.17541 6.02052 7.37891 5.2046 7.77305C4.38867 8.1672 3.66308 8.74268 3.07746 9.46012C4.08532 9.03865 5.15978 8.82264 6.2439 8.82353Z"
                      fill="white"
                    />
                    <path
                      d="M7.80488 10.4706H6.2439C4.96359 10.4701 3.7075 10.8388 2.61141 11.537C1.51533 12.2351 0.620957 13.2361 0.0249767 14.4318C0.00822477 14.2099 -0.000107147 13.9873 1.04009e-06 13.7647C1.04009e-06 9.21635 3.49424 5.52941 7.80488 5.52941V1L16 8L7.80488 15V10.4706ZM6.2439 8.82353H9.36585V11.5478L13.5188 8L9.36585 4.45224V7.17647H7.80488C6.90751 7.17541 6.02052 7.37891 5.2046 7.77305C4.38867 8.1672 3.66308 8.74268 3.07746 9.46012C4.08532 9.03865 5.15978 8.82264 6.2439 8.82353Z"
                      fill="#4E5D78"
                    />
                  </svg>
                  <span>Share</span>
                </div>
              </div>
              <hr className="opacity-30"></hr>
            </div>
          </main>
        </div>
      </Link>
    </>
  );
};

export default FeedPost;
