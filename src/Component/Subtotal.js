import React from 'react'
import { useStateValue } from "./StateProvider";
import { total } from './Reducer';

function Subtotal() {
  const [_basket, dispatch] = useStateValue();
  const basket = _basket?.basket;
  return (
    <div className='bg-light p-4 'style={{height:"190px"}}>
        <p style={{height:"35px"}}>Subtotal({basket?.length} items): <strong> $ {total(basket)} </strong></p>
        <input type="checkbox"/> this order contains a gift
        <button className='btn btn-warning rounded-0 w-100'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal