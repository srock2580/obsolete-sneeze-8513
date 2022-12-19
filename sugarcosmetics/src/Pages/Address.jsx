import { Link } from "react-router-dom";

export const Address = () => {
  return (
      <div className="container">
        <div className="left-sec">

          <div className="delivery-sec">
            <img
              src="https://cdn0.iconfinder.com/data/icons/bold-icons/32/pin-64.png"
              alt=""
            />

            <span>ADDRESS</span>
          </div>

          <div className="input-sec">
            <input type="email" name="" id="email" placeholder="Email" />
            <div className="name">
              <input
                type="text"
                name=""
                id="firstName"
                placeholder="First Name"
              />
              <input
                type="text"
                name=""
                id="lastName"
                placeholder="Last Name"
              />
            </div>
            <input type="text" name="" id="address" placeholder="Address" />
            <div className="contact">
              <input
                type="number"
                name=""
                id="postalCode"
                placeholder="Postal Code"
              />
              <input type="number" name="" id="phone" placeholder="Phone" />
            </div>
          </div>

          <button className="left-button"><Link to="/checkout" style={{color: 'white', textDecoration: 'none'}}>CHECKOUT</Link></button>
        </div>
      </div>
  );
};
