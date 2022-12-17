import { useState } from "react";

export const Item = ({ image, name, price }) => {
  const addCart = () => {
    const data = JSON.parse(localStorage.getItem("cartData")) || [];

    const obj = {
      image: image,
      name: name,
      price: price,
    };

    let check = true;
    data.forEach((ele) => {
      if (ele.name === obj.name) check = false;
    });

    if (check) {
      data.push(obj);
      localStorage.setItem("cartData", JSON.stringify(data));
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
