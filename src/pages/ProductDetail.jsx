import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";


function ProductDetail({ products }) {
  const { id } = useParams();

 
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === Number(id)) {
      product = products[i];
    }
  }

  const [size, setSize] = useState(50);

  useEffect(() => {
    document.title = product ? `Blue Eva | ${product.name}` : "Blue Eva";
   
    setSize(50);
  }, [product]);

  if (!product) {
    return (
      <div className="wrap pagehead">
        <h1>Perfume not found</h1>
        <p><Link to="/collection">Back to the collection</Link></p>
      </div>
    );
  }

 
  const price = size === 100 ? product.price100 : product.price50;

  const related = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].id !== product.id && related.length < 4) {
      related.push(products[i]);
    }
  }

  return (
    <div className="wrap">
      <div className="crumb">
        <Link to="/">Home</Link> / <Link to="/collection">Collection</Link> / {product.name}
      </div>

      <div className="detail">
        <div className="stage">
          <img src={product.image} alt={`${product.name} eau de parfum`} />
        </div>

        <div>
          <span className="eyebrow">{product.category} · Eau de parfum</span>
          <h1>{product.name}</h1>
          <div className="price big-price">${price}</div>
          <p className="desc">{product.description}</p>

          <div className="opt">
            <span className="lbl">Size</span>
            <div className="sizes">
              {[50, 100].map((ml) => (
                <button
                  key={ml}
                  className="size"
                  aria-pressed={size === ml}
                  onClick={() => setSize(ml)}
                >
                  {ml} ml
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="head">
          <h2>You may also like</h2>
        </div>
        <div className="grid">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
