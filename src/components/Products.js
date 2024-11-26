import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add, show } from "../redux/slices/CartSlice";

function Products() {
  const [data, setdata] = useState({ products: [] });
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=12")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const dispatch = useDispatch();
  const adds = (item) => {
    dispatch(add(item));
    setTimeout(() => {
      dispatch(show());
    }, 2000);
  };
  return (
    <section className="products py-5">
      <div className="head text-center mb-5">
        <h2 className="fw-bold mb-3">Our Featured Products</h2>
        <p className="text-muted">
          Discover our handpicked selection of premium products<br />
          with exclusive discounts and great quality.
        </p>
      </div>
      <div className="content">
        <div className="container">
          <div className="row g-4">
            {data.products.map((product) => {
              const discountedPrice = product.price * (1 - product.discountPercentage / 100);
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                  <div className="product h-100 d-flex flex-column shadow-sm rounded-3 overflow-hidden">
                    <div className="img position-relative">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-fluid w-100 object-fit-cover"
                        style={{ height: "200px" }}
                      />
                      {product.discountPercentage > 0 && (
                        <span className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 m-2 rounded-pill">
                          {product.discountPercentage}% OFF
                        </span>
                      )}
                    </div>
                    <div className="dis p-3 d-flex flex-column flex-grow-1">
                      <h5 className="title fw-bold mb-2">{product.title}</h5>
                      <p className="description text-muted small mb-3" 
                         style={{
                           display: '-webkit-box',
                           WebkitLineClamp: '2',
                           WebkitBoxOrient: 'vertical',
                           overflow: 'hidden',
                           textOverflow: 'ellipsis'
                         }}>
                        {product.description}
                      </p>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center mb-3">
                          <span className="fs-5 fw-bold text-primary">${discountedPrice.toFixed(2)}</span>
                          {product.discountPercentage > 0 && (
                            <span className="text-decoration-line-through text-muted ms-2">
                              ${product.price}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => adds(product)}
                          className={`btn w-100 ${
                            product.stock > 0 
                              ? 'btn-primary' 
                              : 'btn-secondary'
                          }`}
                          disabled={product.stock === 0}
                        >
                          <i className="fa-solid fa-bag-shopping me-2"></i>
                          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
