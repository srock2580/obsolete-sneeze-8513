export const CartItem = ({image, name, price, quantity, deleteItem, increase, decrease}) => {
  return <div className="cart-item">
  <div>
  <div className="image-sec"><img src={image} alt="image" /></div>
  <div className="name-and-price">
    <p className="name">{name}</p>
    <p className="price">₹{price}</p>
  </div>
  </div>
  <div className="quantity-sec">
    <img onClick={() => deleteItem(name)} src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-64.png" alt="" />
    <div className="button-sec">
      <button onClick={() => decrease(name)} disabled={quantity < 2}>−</button>
      {quantity}
      <button onClick={() => increase(name)} disabled={quantity > 4}>+</button>
    </div>
  </div>
</div>
}