import {Routes, Route} from 'react-router-dom'
import {Home} from './Home'
import {Cart} from './Cart'
import {Login} from './Login'
import { Navbar } from '../Components/Navbar'
import { Menu } from '../Components/Menu'
import { Brushes } from './Brushes'
import { Makeup } from './Makeup'
import { Footer } from '../Components/Footer'

export const AllRoutes = () => {
  return <div>
    <div className='position'>
    <Navbar/>
    <Menu/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/makeup' element={<Makeup/>}/>
      <Route path='/brushes' element={<Brushes/>}/>
    </Routes>
    <Footer/>
  </div>
}