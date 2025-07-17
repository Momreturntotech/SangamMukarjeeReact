import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import Products from './components/products/Products'
import ConditionalRender from './components/ConditionalRender'
import Users from './components/Users/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   {/*  <ClassBasedComponent/>
  <ConditionalRender/>
   <Products/> 
 */} 
 <Users/>


    </>
  )
}

export default App
