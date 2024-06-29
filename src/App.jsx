import React from "react"
import carrito from './assets/img/carrito.png'
import Nav from "./components/Nav"

function App() {
  return (
    <Nav inicio="inicio" nosotros="nosotros" productos="productos" carrito={carrito}/>
  )
}



export default App
