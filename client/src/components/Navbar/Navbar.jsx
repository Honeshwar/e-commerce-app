import React from 'react'
import {Link} from "react-router-dom";
import {MdKeyboardArrowDown, BsSearch, BiUserCircle, AiOutlineHeart, AiOutlineShoppingCart} from '../../utils/constant';
// sass(tool) = scss(short way to write css/syntax) + css pre processor (convert scss to css than browser send)
import './Navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      {/* for padding */}
        <div className="wrapper">
          <div className="left">
          <div className="items">
            <img src="https://freesvg.org/storage/img/thumb/Flag-of-India.png" alt='flag'/>
            <MdKeyboardArrowDown/>
          </div>
          <div className="items">
            <span>USD</span>
            <MdKeyboardArrowDown/>
          </div>
          <div className="items">
            <Link className="links">Men</Link>
          </div>
          <div className="items">
          <Link className="links">Women</Link>
          </div>
          <div className="items">
          <Link className="links">Children</Link>
          </div>
          <div className="items">
          <Link className="links">Accessories</Link>
          </div>
          </div>
          <div className="center">
          <h1 className='brand-name'>HoneshwarSTORE</h1>
          </div>
          <div className="right">
          <div className="navigation-links">
            <div className="items">
              <Link className="links">Homepage</Link>
            </div>
            <div className="items">
              <Link className="links">About</Link>
            </div>
            <div className="items">
              <Link className="links">Contact</Link>
            </div>
            <div className="items">
              <Link className="links">Stores</Link>
            </div>
          </div>
          <div className="icons">
            <div className="items">
              <BsSearch/>
            </div>
            <div className="items">
              <BiUserCircle/>
            </div>
            <div className="items">
              <AiOutlineHeart/>
            </div>
            <div className="items">
              <AiOutlineShoppingCart/>
              <span>0</span>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar