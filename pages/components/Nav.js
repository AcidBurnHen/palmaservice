import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    switch (menuOpen) {
      case true:
        setMenuOpen(false);
        return;
      case false:
        setMenuOpen(!menuOpen);
        return;
    }
  };

  return (
    <header className="site-header">
      <div className={`wrapper site-header__wrapper ${menuOpen ? "mobile-nav" : ""}`}>
        <div className={`site-header__logo ${menuOpen ? "mobile-nav__logo" : ""}`}>
          <Image src="https://sionaugb.sirv.com/palmaservice/logo/site-logo_medium.svg" alt="Maritime Composites Design" width="100%" height="100%" objectFit="contain" />
        </div>
        <nav>
          <ul className="site-header__nav">
            <div className={menuOpen ? "mobile-nav__container" : ""}>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </div>
          </ul>
          <div key={""} className={`site-header__menu-icon ${menuOpen ? "site-header__menu-icon--close-x" : ""} `} onClick={toggleMenu}>
            <div className="site-header__menu-icon__middle"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
