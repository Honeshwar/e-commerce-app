import React from 'react'
import "./Card.scss";
import { Link } from 'react-router-dom';

function Card({item}) {
  return (
    <Link to={`/product/${item.id}`} className="links">
      <div className="card">
        {item.isNew && <span className='new-season'>New Season</span>}
      <div className="images">
          <img src={item.img} alt={item.title} className="primary" />
          <img src={item.img2} alt={item.title} className="secondary" />
      </div>
        <h3>{item.title}</h3>
        <div className="prices">
          <span> &#8377; {item.oldPrice * 75}</span>
          <span> &#8377; {item.price * 75}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card