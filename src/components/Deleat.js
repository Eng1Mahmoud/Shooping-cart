import React from 'react';
import { useSelector } from 'react-redux'
function Deleat() {
    const state = useSelector((state) => state.Cart.popupMessage)
    return (
        <div className="deleat px-5 d-flex align-items-center">

            <h6>{state}</h6>
        </div>
    );
}

export default Deleat;
