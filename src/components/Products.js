
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { add, show } from '../redux/slices/CartSlice';

function Products() {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((respons) => {
                const Data = respons.data;
                const shoes = Data.filter((e) => {
                    return e.category.name === "Shoes"
                })
                const s1 = shoes.slice(0, 12)
                const newp = s1.map((e) => {
                    return Object.assign(e, { q: 1 })
                })
                setdata(newp)
                /*      setdata2(furniture) */
            })
            .catch((error) => { console.log(error) })

    }, [])
    const dispatch = useDispatch()
    const adds = (item) => {
        dispatch(add(item))
        setTimeout(() => { dispatch(show()) }, 1000)
    }
    return (
        <section className="products">
            <div className="head text-center">
                <h2>Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="content">
                <div className="container">
                    <div className='row g-5'>
                        {data.map((product) => {
                            return (
                                <div className="col-md-4 col-sm-12 h-100" key={product.id}>
                                    <div className="product">
                                        <div className="img">
                                            <img src={product.images[0]} alt="product" className="img-fluid"></img>
                                        </div>
                                        <div className="dis pt-3 h-100">
                                            <p className="px-1 title">{product.title}</p>
                                            <p className="px-3" >
                                                <span className="pe-3 price" >{product.price}</span>
                                                <span className="pe-3 old-price">{product.price + 10}</span>
                                            </p>
                                            <div className="add">

                                                <button onClick={() => { adds(product) }} className="w-100 p-1 d-flex justify-content-around align-items-center"><i className="fa-solid fa-bag-shopping p-2 "></i>ADD TO CART</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Products;
