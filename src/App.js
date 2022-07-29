import { useState } from 'react'
import { useSelector } from "react-redux"
import Navbar from "./components/Navbar";
import Deleat from "./components/Deleat";
import Louding from './components/Louding';
import Home from './components/Home';
import CartSection from './components/CartSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style/style.css"
function App() {
  const [show, setShow] = useState(true)
  const [louding, setLouding] = useState(true)
  const state = useSelector((state) => state.Cart)
  const scroll = () => { window.scrollTo(0, 0) }
  window.onload = () => { setTimeout(() => { setLouding(false) }, 2000) }
  window.addEventListener("scroll", () => {
    if (window.scrollY <= 200) {
      setShow(false)

    }
    else { setShow(true) }
  })


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/cartsection" element={<CartSection />}></Route>
      </Routes>
      {state.show ? <Deleat /> : null}
      {
        show ?
          <div className="scroll rounded-circle d-flex align-items-center justify-content-center" onClick={() => { scroll() }} >
            <i className="fa-solid fa-circle-arrow-up "></i>
          </div> : null
      }
      {louding ? <Louding /> : null}
    </BrowserRouter>

  );
}

export default App;
