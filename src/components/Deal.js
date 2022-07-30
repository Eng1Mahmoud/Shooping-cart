import React, { useState, useEffect } from 'react';
import axios from 'axios'
import cat5 from '../images/category/c5.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/slices/CartSlice';
function Deal() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((respons) => {
                const Data = respons.data;

                const furniture = Data.filter((e) => {
                    return e.category.name == "Furniture"
                })
                const s2 = furniture.slice(0, 9)

                setdata(s2)

            })
            .catch((error) => { console.log(error) })

    }, [])



    const state = useSelector((state) => state.Cart)
    const dispatch = useDispatch()
    const adds = (item) => {
        dispatch(add(item))
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
                        <div className=' col-md-9 col-sm-12'>
                            <div className="row g-4">
                                {data.map((e) => {
                                    return (
                                        <div className="col-md-4 col-sm-6 box" key={e.id}>
                                            <div className="card mb-3 border-0" >
                                                <div className="row g-0">
                                                    <div className="col-md-4 img h-75">
                                                        <img src={e.images[0]} className="img-fluid rounded h-100" alt="item"></img>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title b-0">{e.title}</h5>
                                                            <p className="card-text">
                                                                <span className="old-price">{e.price + 15}</span>
                                                                <br />
                                                                <span className="price">{e.price}</span>
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className=' col-md-3 col-sm-12 d'>
                            <img className="img-fluid" src={cat5} alt="deal"></img>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Deal;
