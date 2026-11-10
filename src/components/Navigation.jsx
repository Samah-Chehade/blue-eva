import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="site-header">
      <div className="bar">
        <Link to="/" className="logo">
          Blue Eva
        </Link>

        <nav aria-label="Main">
          
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navigation;
