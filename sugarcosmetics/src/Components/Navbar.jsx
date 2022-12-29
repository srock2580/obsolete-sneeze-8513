import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import allData from '../allData.json'

export const Navbar = () => {
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const getInput = event => {
    setText(event.target.value)
  }

  const makeSearch = () => {
    if (text === '') return

    const len = text.length
    const filterData = allData.filter(ele => {
      let des = ele.name
      des.trim().split(' ').join('')
      let check = false
      for (let i = 0; i < ele.name.length - len; i++) {
        const str = []
        for (let j = i; j < i + len; j++) {
          str.push(ele.name[j])
        }

        if (str.join('').toLowerCase() === text.toLowerCase()) {
          check = true
          break
        }
      }

      if (check) return ele
    })

    localStorage.setItem("filterData", JSON.stringify(filterData));
    navigate('/search')
  }
  
  const activeStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <div className="navbar">
      {/* logo sec */}
      <div className="logo-sec">
        <Link to='/'>
        <img
          src="https://cdn.sanity.io/images/gxmub2ol/production/98a9ebae1456c75c727d5fab8c934dae908a144c-1493x380.png"
          alt="Logo"
        />
        </Link>
      </div>

      {/* search sec */}
      <form className="search-sec" onSubmit={event => event.preventDefault()}>
        <input type="text" placeholder='Try "Liquid Lipstick"' onChange={getInput} required/>
        <button onClick={makeSearch} type="submit">
          <img
            src="https://cdn2.iconfinder.com/data/icons/user-interface-169/32/search-64.png"
            alt=""
          />
          Search
        </button>
      </form>

      {/* login sec */}
      <div className="login-sec">
        
        <button>
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png"
            alt=""
          />
          <NavLink to="/login" style={({isActive}) => isActive ? activeStyle : activeStyle}>
          Login/Register
          </NavLink>
        </button>
        
      </div>

      {/* cart sec */}
      <div className="cart-sec">
        <img
          src="https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-64.png"
          alt=""
        />
        <Link to="/cart">
        <img
          src="https://cdn4.iconfinder.com/data/icons/ui-marketplace-1-0-flat/20/6_cart-64.png"
          alt=""
        />
        </Link>
        <img
          src="https://cdn4.iconfinder.com/data/icons/banking-and-finance/500/interest-percentage-sign-64.png"
          alt=""
        />
      </div>
    </div>
  );
};
