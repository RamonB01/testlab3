import React from 'react'
import ReactDOM from 'react-dom/client'
import Ejer1 from './Eje1'
import Eje1 from './Eje1'
import Triangulo from './Ejer2'
import Contador from "./Ejer1"
import Eje2 from './Eje2'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Yo</h1>
    <Eje1></Eje1>
    <Eje2></Eje2>
    <br />-------------------------------------------------------------------
    <Triangulo></Triangulo>
    <Contador></Contador>
  </React.StrictMode>,
)
