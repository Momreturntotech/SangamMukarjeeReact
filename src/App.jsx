import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This is App .jsx</h1>
    <ClassBasedComponent/>
    <FunctionalComponent/>
    <ProductList/>
    </>
  )
}

export default App
