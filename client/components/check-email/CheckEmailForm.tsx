import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CheckEmailForm: NextPage = () => {
  const router = useRouter();
  let [name, setName] = useState<string | null>(null);
  useEffect(() => {
    setName(sessionStorage.getItem("name"));
  }, []);

  return (
    <>
      <div className="w-3/12 min-w-[300px] mx-auto mt-[70px]">
        <h1 className="text-3xl text-black-900 font-semibold text-center mb-4">
          Check your email
        </h1>
        <h1 className="text-l text-black-900 font-semibold text-center mb-[30px]">
          We’ve sent a link to your email address:
          <span className="text-blue-500"> {name}</span>
        </h1>

        <button
          type="submit"
          className="w-full bg-blue-500 mt-5 py-5 rounded-lg text-grey-100 font-semibold"
          onClick={() => {
            router.push("/forgot-password");
          }}
        >
          Try another address
        </button>

        <div className="mt-[20px] flex justify-center">
          <p className="text-grey font-semibold ">Didn’t receive an email?</p>
          <span className="ml-[15px] text-blue-500 font-semibold text-[16px]">
            <a href="#">Resend</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default CheckEmailForm;
