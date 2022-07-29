import React from 'react';
import { createPortal } from 'react-dom';
import shoes from "../images/banner/banner-img.png"
function Louding() {
    return (
        createPortal(
            <div className='louding d-flex justify-content-center align-items-center w-100 h-100'>
                <img src={shoes} alt="louding" className="img-fluid"></img>
            </div >,
            document.getElementById("portal")
        )
    );
}

export default Louding;
