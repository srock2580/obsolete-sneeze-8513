import { NavLink } from "react-router-dom"

export const Menu = () => {
  const activeStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return <div className="menu">
    <div><NavLink to='/makeup' style={({isActive}) => isActive ? activeStyle : activeStyle}>MAKEUP</NavLink></div>
    <div><NavLink to='/brushes' style={({isActive}) => isActive ? activeStyle : activeStyle}>BRUSHES</NavLink></div>
    <div>SKINCARE</div>
    <div>GIFTING</div>
    <div>BLOG</div>
    <div>OFFERS</div>
    <div>STORES</div>
  </div>
}