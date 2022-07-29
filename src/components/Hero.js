import React from 'react';
import shoes from "../images/banner/banner-img.png"
function Hero() {
    return (
        <div className="hero">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className='col-lg-5 col-sm-12 text pt-5'>
                        <h1 className="pt-5">
                            Nike New
                            <br />
                            Coleection!

                        </h1>
                        <p className='py-3'>
                            I’ve hand selected the best footwear quotes for you: from famous shoe quotes, funny shoe quotes to celebrity shoe quotes. I've also sprinkled in
                            a shoe proverb or two, from past & present to inspire you on your shoe loving journey.
                        </p>

                        <button type="button" className="btn btn-warning rounded-circle d-flex align-items-center justify-content-center ">+</button>

                    </div>
                    <div className='col-lg-7  d-lg-block d-sm-none img  '>
                        <img className="img-fluid" src={shoes} alt=" shoes"></img>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Hero;
