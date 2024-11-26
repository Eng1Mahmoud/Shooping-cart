import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Delete, incres, decres, show } from '../redux/slices/CartSlice';
function Cart() {
    const dispatch = useDispatch()
    const del = (e) => {
        dispatch(Delete(e))
        setTimeout(() => { dispatch(show()) }, 1000)
    }
    const inc = (e) => {
        dispatch(incres(e))
    }
    const dec = (e) => {
        dispatch(decres(e))
    }


    const state = useSelector((state) => state.Cart)
    return (
        <div className="cart my-5">
            <div className="container">
                <h2 className="text-center mb-4">Shopping Cart</h2>
                <div className="content px-2 px-md-3 shadow-sm rounded">
                    {state.countElement == 0 ? (
                        <div className="empty text-center py-5">
                            <i className="fas fa-shopping-cart mb-3" style={{ fontSize: '3rem', color: '#ccc' }}></i>
                            <h3 className="text-muted">Your Cart is Empty</h3>
                            <p className="text-muted">Add some items to get started!</p>
                        </div>
                    ) : (
                        <>
                            {state.itemCart.map((e) => (
                                <div className="item my-3 my-md-4 p-2 p-md-3 border rounded bg-white" key={e.id}>
                                    <div className="row gy-3 gx-4 align-items-center">
                                        <div className='col-12 col-md-3'>
                                            <div className='img-wrapper rounded overflow-hidden'>
                                                <img className="img-fluid w-100" src={e.images[0]} alt={e.title}></img>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <div className='des py-2 px-2'>
                                                <h5 className="mb-2 fs-6 fs-md-5">{e.title}</h5>
                                                <p className="text-muted small">{e.description}</p>
                                                <p className="fw-bold text-primary mb-0">
                                                    Total: ${(e.price * e.count).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-3'>
                                            <div className='quantity-controls d-flex flex-column align-items-center'>
                                                <div className="btn-group mb-2 mb-md-3">
                                                    <button onClick={() => dec(e)} className="btn btn-sm ">
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <span className=" fw-bold px-3 px-md-4">{e.count}</span>
                                                    <button onClick={() => inc(e)} className="btn btn-sm ">
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => del(e)} 
                                                    className="btn  btn-sm w-100">
                                                    <i className="fas fa-trash-alt me-2"></i>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="text-center text-md-end mt-4 mb-3">
                                <button className="btn btn-primary px-4 px-md-5">
                                    <i className="fas fa-shopping-cart me-2"></i>
                                    Proceed to Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;

