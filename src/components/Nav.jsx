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
    <>
      <header
        className={`padding-x py-8 fixed z-50 w-full  ${
          navbar ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex Lg:justify-center justify-end items-center gap-8 lg:gap-16 max-md:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
            className="hidden max-md:block cursor-pointer"
          >
            <img
              src={toggleNavbar ? crossHamb : hamburger}
              alt="Hamburger"
              width={25}
              height={25}
            />
          </div>
        </nav>
        {/* mobile-menu */}
      </header>
      <div
        className={`bg-white fixed z-40 overflow-y-auto left-0 right-0 py-20 pl-4
    duration-500 mt-5 shadow-xl md:hidden ${
      toggleNavbar ? "top-0" : "top-[-100%]"
    }`}
      >
        <ul className="flex flex-col gap-4">
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
    </>
  );
};

export default Nav;
