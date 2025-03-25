import NavLink from "../components/nav-link/nav-link";
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";

interface HeaderProps {
  name?: string;
}

const Header: React.FC<HeaderProps> = ({name = ""}) => {
  return (
    <nav className="header w-full flex items-center sticky top-0 z-10">
      <Image className="nav-logo" src={"/svg/logo.svg"} alt={"logo"} width={30} height={20} />
      <span className="name text-white font-semibold ml-1.5">{name}</span>
      <div className="nav-container ml-auto">
        <IoMenu className="nav-icon md:hidden" size={30} />
        <ul className="nav-list hidden md:flex nav-links ">
            <NavLink text="home" href="#home" />
            <NavLink text="projects" href="#projects" />
            <NavLink text="skills" href="#skills" />
            <NavLink text="about-me" href="#about-me" />
            <NavLink text="contacts" href="#contacts" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
