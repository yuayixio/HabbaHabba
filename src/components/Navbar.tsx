import { ReactNode } from "react";

import { FaRegLightbulb } from "react-icons/fa";
import { IoIosBookmarks, IoMdInformationCircle } from "react-icons/io";
import examplepic from "../assets/images/felixpic.png";

type HeaderProps = {
  text: string;
};

type NavbarIconProps = {
  icon: ReactNode;
  text: string;
};

type ProfileIconProps = {
  iconPath: string;
};

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-purple-800 text-white shadow-lg">
      <Header text="Habba habba" />
      <NavbarIcon icon={<FaRegLightbulb size="28" />} text="Find Recipe" />
      <NavbarIcon icon={<IoIosBookmarks size="28" />} text="Saved Recipes" />
      <NavbarIcon icon={<IoMdInformationCircle size="28" />} text="About" />
      <ProfileIcon iconPath={examplepic} />
    </div>
  );
};

const Header = ({ text }: HeaderProps) => (
  <div className="flex items-center justify-center w-30 mr-auto ml-8">
    {text}
  </div>
);

const NavbarIcon = ({ icon, text = "tooltip" }: NavbarIconProps) => (
  <div className="navbar-icon group">
    {icon}
    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const ProfileIcon = ({ iconPath }: ProfileIconProps) => (
  <img
    className="navbar-profile-icon"
    src={iconPath}
    alt="User Profile Picture"
  />
);

export default Navbar;
