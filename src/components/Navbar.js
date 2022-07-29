import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/fav.png'
function Navbar() {
    const [width, setWidth] = useState("container")
    const [margin, setMargin] = useState("mt-4")
    const home = useRef(null)

    window.onscroll = () => {
        if (window.scrollY >= 120) {
            setWidth("container-fluid")
            setMargin("margin")
            console.log("go")
        }
        else {
            setWidth("container")
            setMargin("mt-4")
        }
    }
    useEffect(() => {
        home.current.click()
    }, [])
    return (

        <nav className={` navbar-expand-lg navbar-light w-100 ${margin} p-0  navbar`} >
            <div className={`${width} bg-light p-3  `} >
                <Link to="/" className="navbar-brand" > <img src={logo} alt="logo" />  Shopping </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" ref={home}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">SHOP</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">PAGES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">CONTACT</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/cartsection">
                                <i className="fa-solid fa-cart-shopping "></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;
