import { useState } from 'react'

export default function Eje1() {
  const [contador, setContador] = useState(5)
  return (
    <>
      <h1>{contador}</h1>
      <button disabled={contador===0} onClick={()=>{setContador(contador-1)}}>Decrementar</button>
      <button disabled={contador===10} onClick={()=>{setContador(contador+1)}}>Incrementar</button>
      <button onClick={()=>{setContador(5)}}>Reiniciar</button>
    </>
  )
}










    
    // const Incrementar =()=>{
    //   setContador(contador+1)
    // }
  
    // const Decrementar =()=>{
    //   setContador(contador-1)
    // }
    
    // const Reiniciar =()=>{
    //   setContador(5)
    // }