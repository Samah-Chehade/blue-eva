import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="img" aria-label={product.name}>
        <img src={product.image} alt={`${product.name} eau de parfum`} loading="lazy" />
      </Link>

      <div className="info">
        <h3>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <span className="price">
          ${product.price50} <small>/ 50 ml</small>
        </span>
      </div>
    </article>
  );
}

export default ProductCard;
