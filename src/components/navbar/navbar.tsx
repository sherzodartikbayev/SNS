import { Link } from "react-router-dom";
import { styles } from "../../utils/style";
import { close, logo, menu } from "../../assets";
import { navbarLinks } from "../../utils/constants";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const toggleHandler = () => setToggleNav((prev) => !prev);

  return (
    <header
      className={`${styles.paddingX} ${styles.flexBetween} w-full h-24 mx-auto z-10 fixed bg-primary`}
    >
      {/* Logo  */}
      <div className="">
        <Link to="/" onClick={() => setToggleNav(false)}>
          <img
            src={logo}
            alt="logo"
            width={44}
            height={44}
            className="object-contain"
          />
        </Link>
      </div>

      {/* NavbarLinks  */}
      <ul className={`${styles.flexCenter} flex-1 gap-20 max-lg:hidden`}>
        {navbarLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-inter text-xl text-yellow hover:text-white transition-all duration-500 cursor-pointer"
          >
            <Link to={nav.href}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Navbar mobile  */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleNav ? close : menu}
          alt="nav"
          className="w-[30px] h-[30px] object-contain cursor-pointer"
          onClick={toggleHandler}
        />
      </div>

      <div
        className={`${styles.flexCenter} ${
          !toggleNav ? "hidden" : "flex"
        } flex-col bg-gradient p-6 absolute top-24 right-0 left-0 w-full h-[100vh] z-[99]`}
      >
        <ul className={`${styles.flexCenter} flex-col list-none flex-1 gap-10`}>
          {navbarLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-yellow hover:text-white active:text-white text-[2em]
              cursor-pointer transition-all duration-500`}
            >
              <Link to={nav.href} onClick={() => setToggleNav(false)}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
