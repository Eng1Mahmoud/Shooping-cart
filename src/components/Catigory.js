import React from 'react';
import cat1 from '../images/category/c1.jpg'
import cat2 from '../images/category/c2.jpg'
import cat3 from '../images/category/c3.jpg'
import cat4 from '../images/category/c4.jpg'
import cat5 from '../images/category/c5.jpg'
function Catigory() {
    return (
        <section className='category py-5'>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="row g-4">
                        <div className='col-md-8'>
                            <div className="position-relative overflow-hidden rounded h-100">
                                <img src={cat1} alt="cat1" 
                                    className="w-100 h-100 object-fit-cover" 
                                    style={{minHeight: "300px"}} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="position-relative overflow-hidden rounded h-100">
                                <img src={cat2} alt="cat2" 
                                    className="w-100 h-100 object-fit-cover"
                                    style={{minHeight: "300px"}} />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="position-relative overflow-hidden rounded h-100">
                                <img src={cat3} alt="cat3" 
                                    className="w-100 h-100 object-fit-cover"
                                    style={{minHeight: "300px"}} />
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className="position-relative overflow-hidden rounded h-100">
                                <img src={cat4} alt="cat4" 
                                    className="w-100 h-100 object-fit-cover"
                                    style={{minHeight: "300px"}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="position-relative overflow-hidden rounded h-100">
                        <img src={cat5} alt="cat5" 
                            className="w-100 h-100 object-fit-cover"
                            style={{minHeight: "630px"}} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Catigory;
