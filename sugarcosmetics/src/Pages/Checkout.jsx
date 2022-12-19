import { useRef } from "react";
import { useState } from "react";

export const Checkout = () => {
  const [success, setSuccess] = useState(false);

  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const forth = useRef(null);
  const fifth = useRef(null);

  const getInput = (event, ref) => {
    if (event.target.value) {
      ref.current.focus();
    }
  };

  const makeSubmit = () => {
    setSuccess(true)
  };

  const Phonepe = () => {
    return <div className="checkout-sec">
    <h3>Checkout With PhonePe</h3>
    <form
    className="password-sec"
    onSubmit={(event) => event.preventDefault()}
  >
    <input
      type="text"
      required
      ref={first}
      onChange={(event) => getInput(event, second)}
    />
    <input
      type="text"
      required
      ref={second}
      onChange={(event) => getInput(event, third)}
    />
    <input
      type="text"
      required
      ref={third}
      onChange={(event) => getInput(event, forth)}
    />
    <input
      type="text"
      required
      ref={forth}
      onChange={(event) => getInput(event, fifth)}
    />
    <input type="text" required ref={fifth} />

    <input
      type="submit"
      name=""
      id="submit"
      value="SUBMIT"
      onClick={makeSubmit}
    />
  </form>
  </div>
  }

  const Successful = () => {
    return <div className="successful">
      <h3>Payment Successful</h3>
      <img src="https://c.tenor.com/xPh7mDqOZ8UAAAAM/success.gif" alt="" />
    </div>
  }

  return (
    <div>
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9iewkRN8NhauZzq4tnQLHe5uIOWCGW9DDA&usqp=CAU"
          alt=""
        />
      </div>
      

        {success ? <Successful/> : <Phonepe/>}
      
    </div>
  );
};
