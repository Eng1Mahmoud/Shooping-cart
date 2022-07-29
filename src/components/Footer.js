import React from 'react';
import img1 from "../images/i1.jpg"
import img2 from "../images/i2.jpg"
import img3 from "../images/i3.jpg"
import img4 from "../images/i4.jpg"
import img5 from "../images/i5.jpg"
import img6 from "../images/i6.jpg"
import img7 from "../images/i7.jpg"
import img8 from "../images/i8.jpg"
function Footer() {
    return (
        <footer>
            <div className="container-fluid p-5">
                <div className="row g-5 row1 py-5">
                    <div className="col-lg-3 col-md-6 col-sm-">
                        <h5 className="logo pb-2">About Us</h5>
                        <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="pb-2" >Newsletter</h5>
                        <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                        <div className="search ">
                            <input type="email"></input>
                            <button type="submit">SignUp</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="pb-2">Instragram Feed</h5>
                        <div className='insta row g-2'>
                            <div className='img col-3'>
                                <img className="img-fluid" src={img1} alt=" insta"></img>
                            </div>
                            <div className='img col-3'>
                                <img className="img-fluid" src={img2} alt=" insta"></img>
                            </div>
                            <div className='img col-3'>
                                <img className="img-fluid" src={img2} alt=" insta"></img>
                            </div>
                            <div className='img col-3'>
                                <img className="img-fluid" src={img4} alt=" insta"></img>
                            </div>
                            <div className='img col-3'>
                                <img className="img-fluid" src={img5} alt=" insta"></img>
                            </div>
                            <div className='img col-3'>
                                <img className="img-fluid" src={img6} alt=" insta"></img>
                            </div>
                            <div className='img col-3'>
                                <img className="img-fluid" src={img7} alt=" insta"></img>
                            </div>
                            <div className='img col-3'>
                                <img className="img-fluid" src={img8} alt=" insta"></img>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h5 className="py-3">Follow Us</h5>
                        <p>Let us be social</p>
                        <ul className='d-flex justify-content-start'>
                            <li><a href="#"><i className="fa-brands fa-facebook-f pe-4"></i> </a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter pe-4"></i></a></li>
                            <li><a href="#"> <i className="fa-brands fa-instagram pe-4"></i></a></li>
                            <li><a href="#"> <i className="fa-brands fa-linkedin-in pe-4"></i></a></li>

                        </ul>

                    </div>
                </div>
                <div className=" row2 pt-3 text-center">
                    <div className='Devoloper '>
                        <p className='text-center'> &copy;<strong>Food,</strong> All Right Reserved. Designed By <strong>Mahmoud Mohamed</strong> </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
