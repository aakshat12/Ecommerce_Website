import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import Header from "./Header";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [_basket, dispatch] = useStateValue();
  const basket = _basket?.basket;
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-2 min-vh-100">
          <div className="col-9">
            <img
              src="/Assests/Add.jpg"
              className="w-500"
              style={{ height: "190px", width: "1054px" }}
              alt=""
            />
            <div className="mt-2">
              <h3>Your shopping Cart</h3>
              {basket &&
                Array.isArray(basket) &&
                basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    price={item.price}
                  />
                ))}
            </div>
          </div>
          <div className="col-3">
            <Subtotal />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
