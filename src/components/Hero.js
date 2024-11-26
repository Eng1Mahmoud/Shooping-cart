import React from 'react';
import shoes from "../images/banner/banner-img.png"
function Hero() {
    return (
        <div className="hero">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className='col-lg-5 col-md-6 col-sm-12 text py-4 py-lg-5 order-2 order-md-1'>
                        <h1 className="pt-3 pt-lg-5">
                            Nike New
                            <br />
                            Collection!
                        </h1>
                        <p className='py-2 py-lg-3'>
                            I’ve hand selected the best footwear quotes for you: from famous shoe quotes, funny shoe quotes to celebrity shoe quotes. I've also sprinkled in
                            a shoe proverb or two, from past & present to inspire you on your shoe loving journey.
                        </p>
                        <button type="button" className="btn btn-warning rounded-circle d-flex align-items-center justify-content-center mb-4 mb-lg-0">+</button>
                    </div>
                    <div className='col-lg-7 col-md-6 col-sm-12 img order-1 order-md-2'>
                        <img className="img-fluid" src={shoes} alt="shoes" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
