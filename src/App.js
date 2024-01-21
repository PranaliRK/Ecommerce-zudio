import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/Home'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import About from './component/About'
import Data from './Data';
import { useState } from 'react';

const App = () => {
  const[search,setSearch]=useState("")
  const[cart,setCart]=useState([])
  const[data,setData]=useState(Data)

  function handleClick(item){
    setCart([...cart,item])
  }
  return (
    <div className='nav'>
      <BrowserRouter>
      <Navbar setSearch={setSearch} data={data} setData={setData} size={cart.length}/>
      <Routes>
        <Route path='/' element = {<Home data={data} search={search} handleClick={handleClick}/>}/>
        <Route path='/cart' element = {<Cart cart = {cart} setCart={setCart}/>}/>
        <Route path='/about/:aboutId' element={<About Data={Data} data={data} search={search} handleClick={handleClick}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
