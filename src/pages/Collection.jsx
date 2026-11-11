import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Collection({ products, categories }) {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    document.title = "Blue Eva | Collection";
  }, []);

  
  const visible = [];
  for (let i = 0; i < products.length; i++) {
    if (category === "All" || products[i].category === category) {
      visible.push(products[i]);
    }
  }

  return (
    <div className="wrap">
      <div className="pagehead">
        <span className="eyebrow">Collection</span>
        <h1>All fragrances</h1>
        <p>Filter by who it's for, then open any bottle to see its notes.</p>
      </div>

      <div className="chips" role="group" >
        {categories.map((name) => (
          <button
            key={name}
            className="chip"
            aria-pressed={category === name}
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="grid">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
