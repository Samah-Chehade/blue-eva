import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import hero from "../assets/hero.jpg";

function Home({ products }) {
  // useEffect update the browser tab title after the page renders
  useEffect(() => {
    document.title = "Blue Eva | Home";
  }, []);

  // Show the first four perfumes
  const bestsellers = [];
  for (let i = 0; i < 4; i++) {
    bestsellers.push(products[i]);
  }

  return (
    <div className="wrap">
      <section className="hero">
        <div>
          <span className="eyebrow">Eau de parfum · Beirut</span>
          <h1>Find the scent that stays.</h1>
          <div className="ctas">
            <Link className="btn" to="/collection">Shop the collection</Link>
            <Link className="btn ghost" to="/about">Our story</Link>
          </div>
        </div>
        <div className="stage">
          <img src={hero} alt="Three Blue Eva perfume bottles on a pale blue surface" />
        </div>
      </section>

      <section>
        <div className="head head-end">
          <Link className="btn ghost" to="/collection">View all</Link>
        </div>
        <div className="grid">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
