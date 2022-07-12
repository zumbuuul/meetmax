import { NextPage } from "next";

const CheckEmailForm: NextPage = () => {
  return (
    <>
      <div className="w-3/12 min-w-[300px] mx-auto mt-[70px]">
        <h1 className="text-3xl text-darkgrey font-semibold text-center mb-4">
          Check your email
        </h1>
        <h1 className="text-l text-darkgrey font-semibold text-center mb-[30px]">
          We’ve sent a link to your email address:
          <span className="text-skyblue"> ahmed@gmail.com</span>
        </h1>

        <button
          type="submit"
          className="w-full bg-skyblue mt-5 py-5 rounded-lg text-dirtywhite font-semibold"
        >
          Skip now
        </button>

        <div className="mt-[20px] flex justify-center">
          <p className="text-grey font-semibold ">Didn’t receive an email?</p>
          <span className="ml-[15px] text-skyblue font-semibold text-[16px]">
            <a href="">Resend</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default CheckEmailForm;
