import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillGithub, AiFillLinkedin,  } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import {BsMedium} from "react-icons/bs";

const SocialMedia = () => (
  <div className="flex justify-center items-center gap-4">
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href="https://github.com/ShivamBhasin2002"
      title="Visit my github profile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGithub className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href="https://www.linkedin.com/in/shivam-bhasin-465233166/"
      title="Contact me on LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillLinkedin className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href="https://twitter.com/_shivambhasin"
      title="Contact me on Twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href="https://medium.com/@_shivambhasin"
      title="Read my blogs on Medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsMedium className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
    <a
      className="transition-all text-icons dark:text-icons-dark rounded-[50px] p-[8px] md:hover:scale-[1.2] md:hover:text-[white] md:hover:bg-button md:dark:hover:bg-button-dark"
      href="mailto://bhasinshivam2002@gmail.com"
      title="Send directly an email"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CgMail className="w-10 h-10 md:w-12 md:h-12" size="3rem" />
    </a>
  </div>
);

const Header = () => {
  const { route } = useRouter();
  return (
    <header className="flex flex-row flex-auto justify-between py-8 px-4 sticky top-0 bg-bodyBgColor dark:bg-bodyBgColor-dark z-[21] ">
      {route === "/" ? (
        <div className="flex flex-row content-center text-[1.5rem] md:text-[2.5rem] font-bold">
          <span className="flex items-center">@_shivambhasin</span>
        </div>
      ) : (
        <div className="flex flex-row content-center text-[1.5rem] md:text-[2.5rem] font-bold">
          <Link href="/">
            <a className="flex items-center">@_shivambhasin</a>
          </Link>
        </div>
      )}
      <ul className="hidden lg:flex justify-center items-center gap-[2rem] mx-2">
        <li>
          <Link href={route === "/all-projects" ? "/#about" : "#about"}>
            <a className="text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors">About</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a className="text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors">Projects</a>
          </Link>
        </li>
        <li>
          <Link href={route === "/all-projects" ? "/#tech" : "#tech"}>
            <a className="text-[1.5rem] md:text-[2rem] leading-[32px] p-2 md:p-0 text-primary dark:text-primary-dark hover:text-button dark:hover:text-button-dark cursor-pointer transition-colors">Technologies</a>
          </Link>
        </li>
      </ul>
      <SocialMedia />
    </header>
  );
};

export default Header;
