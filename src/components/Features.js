import React from 'react';
import icon1 from "../images//features/f-icon1.png"
import icon2 from "../images//features/f-icon2.png"
import icon3 from "../images//features/f-icon3.png"
import icon4 from "../images//features/f-icon4.png"
function Features() {
    return (
        <section className="features text-center py-3 py-md-5">
            <div className="container py-2 py-md-5" >
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-lg-3 box">
                        <img src={icon1} alt="Free Delivery icon" className="img-fluid mb-2"></img>
                        <h6 className="pt-2">Free Delivery</h6>
                        <p>Free Shipping on all order</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 box">
                        <img src={icon2} alt="Return Policy icon" className="img-fluid mb-2"></img>
                        <h6 className="pt-2">Return Policy</h6>
                        <p>Free Shipping on all order</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 box">
                        <img src={icon3} alt="24/7 Support icon" className="img-fluid mb-2"></img>
                        <h6 className="pt-2">24/7 Support</h6>
                        <p>Free Shipping on all order</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 box">
                        <img src={icon4} alt="Secure Payment icon" className="img-fluid mb-2"></img>
                        <h6 className="pt-2">Secure Payment</h6>
                        <p>Free Shipping on all order</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
