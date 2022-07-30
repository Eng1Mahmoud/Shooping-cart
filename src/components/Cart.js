import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleat, incres, decres, show } from '../redux/slices/CartSlice';
function Cart() {
    const dispatch = useDispatch()
    const del = (e) => {
        dispatch(deleat(e))
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
        <div className="cart my-3">
            <div className="container">
                <div className="content px-3">
                    {
                        state.countElement == 0 ? <h1 className="empty text-center py-3"> Empty Cart</h1> :
                            state.itemCart.map((e) => {
                                return (
                                    <div className="item my-5 p-0" key={e.id}>
                                        <div className="row gx-4 align-items-center">
                                            <div className='col-md-3 col-sm-12 '>
                                                <div className='img '>
                                                    <img className="img-fluid" src={e.images[0]} alt="item"></img>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-sm-12 '>
                                                <div className='des py-2 px-2'>
                                                    <p>{e.description}</p>
                                                    <p><strong>Total Price :</strong> {e.price * e.q}</p>
                                                </div>
                                            </div>
                                            <div className='col-md-3 col-sm-12  '>
                                                <div className='des px-1'>
                                                    <button onClick={() => { inc(e) }} className="add m-1">+</button>
                                                    <span>{e.q}</span>
                                                    <button onClick={() => { dec(e) }} className="sub m-1">-</button>
                                                    <div>
                                                        <button onClick={() => {
                                                            del(e)

                                                        }} className="del m-1">
                                                            Deleat
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                )
                            })
                    }
                </div>
            </div>
        </div>
    );
}

export default Cart;

