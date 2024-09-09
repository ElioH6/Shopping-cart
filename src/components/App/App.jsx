import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import { useState } from 'react'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [numOfItems, setNumOfItems] = useState(0);
  const [quantities, setQuantities] = useState({});

  return (
    <>
      <Navbar num={numOfItems}/>
      <Outlet context={{ cartItems, setCartItems, numOfItems, setNumOfItems, quantities, setQuantities }}/>
    </>
  )
}

export default App
