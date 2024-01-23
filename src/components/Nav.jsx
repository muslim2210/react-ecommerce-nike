import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { crossHamb } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <header className="padding-x py-8 fixed z-50 w-full">
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
      <div className={`mt-5 lg:hidden ${toggleNavbar ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <li key={item.label} className="px-4 py-[10px] text-end mt-2">
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
