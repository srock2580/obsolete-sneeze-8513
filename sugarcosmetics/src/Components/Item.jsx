import { useState } from "react";

export const Item = ({ image, name, price }) => {
  const addCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

    const obj = {
      image: image,
      name: name,
      price: price,
      quantity: 1
    };

    let check = true;
    cartData.forEach((ele) => {
      if (ele.name === obj.name) check = false;
    });

    if (check) {
      cartData.push(obj);
      localStorage.setItem("cartData", JSON.stringify(cartData));
    } else alert("Item is already added!");
  };

  return (
    <div className="item">
      <img src={image} alt="" />
      <p>{name}</p>
      <h4>₹{price}</h4>
      <button onClick={addCart}>ADD TO CART</button>
    </div>
  );
};
