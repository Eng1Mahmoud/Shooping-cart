import React from 'react';
import { useSelector } from 'react-redux'
function Alert() {
    const state = useSelector((state) => state.Cart.popupMessage)
    console.log(state)
    return (
        <div className="alert px-5 d-flex align-items-center">
            <h6>{state}</h6>
        </div>
    );
}

export default Alert;
