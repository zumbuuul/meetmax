import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Formik, Form } from "formik";
import FormInputField from "../reusuable/FormInputField";

const MainHeader: NextPage = () => {
  return (
    <header className="sticky z-[100] top-0 left-0 flex items-center h-20 justify- gap-[20px] laptop:flex-row-reverse bg-grey-100">
      <div className="relative laptop:flex gap-[20px] items-center">
        <p className="hidden laptop:inline-block whitespace-nowrap font-semibold text-grey-900">
          Saleh Ahmed
        </p>
        <div className="w-[35px] laptop:w-[50px]">
          <Image
            src="/profileimage.png"
            alt="Profile Picture "
            width="50px"
            height="50px"
            className="rounded-lg w-[50px]"
          ></Image>
        </div>
      </div>
      {/* this div is used as a tampon zone between search bar and the elements on the right */}
      <div className="w-8/12 hidden laptop:block"></div>
      <div className="w-[100%]">
        <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
          <Form>
            <FormInputField
              name="search"
              placeholder="Search for anything!"
              inputiconpath="icons/magnifyinglass"
            ></FormInputField>
          </Form>
        </Formik>
      </div>
      <div className="block laptop:hidden">
        <Image
          src="/smalllogo.png"
          alt="Meetmax logo"
          width="20px"
          height="20px"
        ></Image>
      </div>
      <div className="items-center justify-center laptop:flex hidden w-[15vw]">
        <Link href="/">
          <a>
            <Image
              src="/icons/Logo.png"
              alt="Meetmax logo"
              width="112px"
              height="28px"
              className="inline-block"
            ></Image>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;

{
  /* <header className="flex items-center justify-evenly gap-[50px] h-[10vh]">
      <div className="relative">
        <Image
          src="/profileimage.png"
          alt="Profile Picture "
          width="50px"
          height="50px"
          className="rounded-full"
        ></Image>
      </div>
      <div className="mb-[20px] w-full">
        <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
          <div className="w-full">
            <Form>
              <FormInputField
                name="search"
                placeholder="Search for anything!"
                inputiconpath="magnifyinglass"
              ></FormInputField>
            </Form>
          </div>
        </Formik>
      </div>
      <div>
        <Image
          src="/smalllogo.png"
          alt="Meetmax logo"
          width="20px"
          height="20px"
        ></Image>
      </div>
    </header> */
}
