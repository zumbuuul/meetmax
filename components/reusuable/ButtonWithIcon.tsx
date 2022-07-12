import Image from "next/image";

interface ButtonWithIconProps {
  text?: string;
  iconpath: string;
}

const ButtonWithIcon = ({ text, iconpath }: ButtonWithIconProps) => {
  return (
    <div className="w-full bg-dirtywhite text-darkgrey relative py-3 rounded-lg hover:cursor-pointer">
      <div className="absolute top-3 left-5">
        <Image
          src={`/${iconpath}.png`}
          alt="Google logo"
          width="20px"
          height="20px"
        ></Image>
      </div>
      <p className="font-semibold text-sm ml-14 ">{text}</p>
    </div>
  );
};

export default ButtonWithIcon;
