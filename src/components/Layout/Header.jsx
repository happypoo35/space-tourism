import useMenu from "hooks/useMenu";
import useWindowSize from "hooks/useWindowSize";
import { ReactComponent as Logo } from "icons/logo.svg";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    num: "00",
    name: "home",
    url: "/",
  },
  {
    num: "01",
    name: "destination",
    url: "/destination",
  },
  {
    num: "02",
    name: "crew",
    url: "/crew",
  },
  {
    num: "03",
    name: "technology",
    url: "/technology",
  },
];

const Header = () => {
  const { laptop, mobile } = useWindowSize();
  const navRef = useRef(null);
  const showMenu = useMenu(navRef);

  return (
    <header className="layout-header">
      <div className="logo">
        <Link to="/" className="logo" aria-label="Space tourism logo/home page">
          <Logo />
        </Link>
        <div className="line"></div>
      </div>
      <button
        className={showMenu.value ? "hamburger active" : "hamburger"}
        onClick={showMenu.toggle}
      >
        <div className="hamburger-icon"></div>
      </button>
      <nav
        className={showMenu.value ? "header-nav active" : "header-nav"}
        ref={navRef}
      >
        {navLinks.map((el) => (
          <NavLink
            to={el.url}
            className="nav-text"
            onClick={showMenu.off}
            key={el.num}
          >
            {(!laptop || mobile) && <strong>{el.num}</strong>}
            {el.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
