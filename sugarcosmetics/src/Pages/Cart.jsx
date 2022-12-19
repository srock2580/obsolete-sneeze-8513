import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../Components/CartItem";
import { Loader } from "../Components/Loader";

export const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [shipping, setShipping] = useState(0)
  const [total, setTotal] = useState(0)

  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  // delete item
  const deleteItem = (name) => {
    setLoading(true);

    let newData = cartData.filter((ele) => {
      if (name !== ele.name) return ele;
    });

    localStorage.setItem("cartData", JSON.stringify(newData));
  };

  // increase quantity
  const increase = (name) => {
    setLoading(true);
    let newData = cartData.map((ele) => {
      return ele.name === name ? { ...ele, quantity: ele.quantity + 1 } : ele;
    });

    localStorage.setItem("cartData", JSON.stringify(newData));
  };

  // decrease quantity
  const decrease = (name) => {
    setLoading(true);
    let newData = cartData.map((ele) => {
      return ele.name === name ? { ...ele, quantity: ele.quantity - 1 } : ele;
    });

    localStorage.setItem("cartData", JSON.stringify(newData));
  };

  useEffect(() => {
    let sum = 0
    cartData.forEach(element => {
      sum += element.price * element.quantity
    });
    setSubtotal(sum)

    setTax(Math.floor(subtotal * 2 / 100))
    setShipping(Math.floor(subtotal * 5 / 100))
    setTotal(subtotal + tax + shipping)

    setLoading(false);
  });

  return (
    <div className="cart" >
      <div className="cart-summary">
        <h3>CART SUMMARY</h3>
        <div className="cart-item-sec" >
          {loading ? (
            <Loader/>
          ) : (
            cartData.map((ele) => (
              <CartItem
                {...ele}
                deleteItem={deleteItem}
                increase={increase}
                decrease={decrease}
              />
            ))
          )}
        </div>
      </div>
      <div className="price-details">
        <h3>PRICE DETAILS</h3>
        <div className="total-frame">
          <div className="subtotal"><p>Subtotal (Inclusive of Taxes)</p><p>₹{subtotal}</p></div>
          <div className="subtotal"><p>Tax</p><p>₹{tax}</p></div>
          <div className="subtotal"><p>Shipping</p><p>₹{shipping}</p></div>
          <hr />
          <div className="total"><p>Total</p><p>₹{total}</p></div>
        </div>
        <div className="order-button"><button ><Link to="/address" style={{color: 'white', textDecoration: 'none'}}>PLACE ORDER</Link></button></div>
      </div>
    </div>
  );
};
