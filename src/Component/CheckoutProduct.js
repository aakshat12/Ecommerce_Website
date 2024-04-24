import React from 'react'
import { useState } from 'react'

function CheckoutProduct(props) {
  const[_basket, dispatch] = useState({
    basket: [],
  });
  // const basket = _basket?.basket;
  const RemoveFromCart = () =>{
    dispatch({
      type: "REMOVE_FROM_CART",
      id: props.id
    })
  }
  // console.log("....",_basket)
  return (
    <div className='d-flex mb-3'>
        <div style={{width:"160px"}}>
            <img src={`/Assests/${props.image}`} className='w-100' alt='PC'/>
        </div>
        <div className='ms-4'>
            <h4 >{props.title}</h4>
            <span>$<strong>{props.price}</strong></span>
            <p> {Array(props.rating) .fill().map((_,i) =>(
          <span>⭐</span>
            ))}
          </p>
            <button className='btn btn-sm rounded-0 btn-warning' onClick={RemoveFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct