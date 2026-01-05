import React from "react";
import { useCart } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";
const ProductSection = ({ title, products }) => {
      const { addToCart } = useCart();
       const navigate = useNavigate();

        const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };
  return (
    <section className="container py-5">
      <h2 className="mb-4 fw-bold">{title}</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6">
            <div className="card product-card shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-success fw-bold">
                  ₹{product.pricePerKg || product.price} {product.unit || "/ kg"}
                </p>
                {product.quality && <p className="text-muted">{product.quality}</p>}
                {product.description && <p className="text-muted">{product.description}</p>}
                {/* <button className="btn btn-dark btn-sm">
                  Add to Cart <i className="bi bi-cart"></i>
                </button> */}
           <button
                  className="btn btn-dark btn-sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
