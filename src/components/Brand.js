import React from 'react';
import brand1 from '../images/brand/1.png'
import brand2 from '../images/brand/2.png'
import brand3 from '../images/brand/3.png'
import brand4 from '../images/brand/4.png'

function Brand() {
    return (
        <section className='brand'>
            <div className="container py-5">
                <div className='row g-5 text-center  py-5'>
                    <div className="col-md-3 col-sm-6">
                        <div className='img'>
                            <img src={brand1} alt="brand1"></img>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className='img'>
                            <img src={brand2} alt="brand1"></img>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className='img'>
                            <img src={brand3} alt="brand1"></img>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className='img'>
                            <img src={brand4} alt="brand1"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Brand;
