import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

interface SidebarButtonProps {
  iconpath: string;
  buttontext: string;
  route: string;
}

const SidebarButton: NextPage<SidebarButtonProps> = ({
  buttontext,
  iconpath,
  route = "/",
}) => {
  const currentRoute = useRouter().pathname;

  return (
    <>
      <Link href={route}>
        <a>
          {currentRoute === route ? (
            <div
              data-cy="main"
              className="rounded-lg py-[20px] bg-grey-1100 font-bold"
            >
              <div
                data-cy="first"
                className="text-grey-100 ml-11 text-[0.8rem] desktop:text-base"
              >
                {buttontext}
              </div>
            </div>
          ) : (
            <div
              data-cy="main"
              className="rounded-lg py-[25px]  bg-grey-100 font-semibold"
            >
              <div
                data-cy="first"
                className="text-[0.8rem] desktop:text-base text-grey-1100 ml-6"
              >
                <Image
                  src={`/icons/${iconpath}.svg`}
                  alt="Icon"
                  width="16px"
                  height="16px"
                ></Image>
                <span className="ml-2"></span>
                {buttontext}
              </div>
            </div>
          )}
        </a>
      </Link>
    </>
  );
};

export default SidebarButton;
