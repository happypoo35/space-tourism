import { ReactComponent as Logo } from "assets/shared/logo.svg";
import { Link } from "react-router-dom";

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
  return (
    <header className="layout-header">
      <Link to="/" aria-label="Space tourism logo/home page">
        <Logo />
      </Link>
      <nav className="header-nav">
        {navLinks.map((el) => (
          <Link to={el.url} key={el.num}>
            <strong>{el.num}</strong>
            {el.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
