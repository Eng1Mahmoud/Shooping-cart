import React from 'react';
import cat1 from '../images/category/c1.jpg'
import cat2 from '../images/category/c2.jpg'
import cat3 from '../images/category/c3.jpg'
import cat4 from '../images/category/c4.jpg'
import cat5 from '../images/category/c5.jpg'
function Catigory() {
    return (
        <section className='catigory '>
            <div className="container " >
                <div className="row g-5 py-5">
                    <div className="col-lg-8 col-sm-12">
                        <div className="row g-3">
                            <div className='col-md-8 col-sm-12 i'>
                                <div className="img">
                                    <img src={cat1} alt="cat1" className="img-fluid"></img>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12 i '>
                                <div className="img">
                                    <img src={cat2} alt="cat2" className="img-fluid "></img>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12 i'>
                                <div className="img">
                                    <img src={cat3} alt="cat3" className="img-fluid"></img>
                                </div>
                            </div>
                            <div className='col-md-8 col-sm-12 i'>
                                <div className="img">
                                    <img src={cat4} alt="cat4" className="img-fluid"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 i">
                        <div className="img">
                            <img src={cat5} alt="cat5" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Catigory;
