import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="site-header">
      <div className="bar">
        <Link to="/" className="logo">
          Blue Eva
        </Link>

            <nav aria-label="Main">
         
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/contact">Contact</Link>
 
</nav>
      </div>
    </header>
  );
}

export default Navigation;
