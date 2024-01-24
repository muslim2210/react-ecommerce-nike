import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { crossHamb } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // change background navbar logic
  const changeBackgorundNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgorundNavbar);

  return (
    <header
      className={`padding-x bg-white py-8 fixed z-50 w-full  ${
        navbar ? "backdrop-blur-xl bg-white/70" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
          className="hidden max-lg:block cursor-pointer"
        >
          <img
            src={toggleNavbar ? crossHamb : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
      <div
        className={`mt-5 backdrop-blur-md bg-white/30 lg:hidden ${
          toggleNavbar ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 ">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="px-4 py-[10px] text-center mt-2 hover:bg-black hover:bg-opacity-10 hover:text-white"
            >
              <a href={item.href} className="font-montserrat">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
