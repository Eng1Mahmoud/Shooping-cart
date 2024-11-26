import React, { useState, useEffect } from 'react';
import axios from 'axios'
import cat5 from '../images/category/c5.jpg'
import { useDispatch } from 'react-redux'
import { add, show } from '../redux/slices/CartSlice';
function Deal() {
 const [data, setdata] = useState([]);
useEffect(() => {
  axios
    .get("https://dummyjson.com/products?limit=12&skip=12")
    .then((response) => {
      setdata(response.data.products);
      console.log(response.data.products)
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        dispatch(add(item))
        setTimeout(() => {
            dispatch(show());
        }, 2000);
    }

    return (
        <section className="deal">
            <div className="head text-center">
                <h2>Deals of the Week</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="content">
                <div className="container py-5">
                    <div className='row g-3'>
                        <div className='col-md-9 col-sm-12'>
                            <div className="row g-4">
                                {data.map((item) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-sm-6 box" key={item.id}>
                                            <div className="card mb-3 border-0 shadow-sm hover-shadow">
                                                <div className="row g-0">
                                                    <div className="col-md-4 col-sm-4 img">
                                                        <img src={item.thumbnail} className="img-fluid rounded h-100 w-100 object-fit-cover" alt={item.title} />
                                                    </div>
                                                    <div className="col-md-8 col-sm-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title text-truncate">{item.title}</h5>
                                                            <p className="card-text">
                                                                <span className="old-price text-muted text-decoration-line-through">${(item.price + (item.price * item.discountPercentage / 100)).toFixed(2)}</span>
                                                                <br />
                                                                <span className="price fw-bold">${item.price}</span>
                                                            </p>
                                                            <button className="btn btn-primary w-100" onClick={() => handleAddToCart(item)}>
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12 d'>
                            <img className="img-fluid rounded shadow-sm" src={cat5} alt="Weekly Deal Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Deal;
