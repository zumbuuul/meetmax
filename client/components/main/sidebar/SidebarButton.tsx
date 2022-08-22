import { NextPage } from "next";

interface SidebarButtonProps {
  iconpath: string;
  buttontext: string;
}

const SidebarButton: NextPage<SidebarButtonProps> = ({
  buttontext,
  iconpath,
}) => {
  return (
    <div data-cy="main">
      <p>{buttontext}</p>
    </div>
  );
};

export default SidebarButton;
