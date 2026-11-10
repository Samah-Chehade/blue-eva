import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <nav aria-label="Footer">
        <Link to="/about">About</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <span>Eva2025</span>
    </footer>
  );
}

export default Footer;
