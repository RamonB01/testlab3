import { useState } from 'react';

const Triangulo = () => {
    const [mensaje, setMensaje] = useState("")
    const [triangulo,setTriangulo]=useState({
        ladoA:"",
        ladoB:"",
        ladoC:""
    })
  const Tipo = () => {
    if (parseInt(triangulo.ladoA) === parseInt(triangulo.ladoB) && parseInt(triangulo.ladoB)===parseInt(triangulo.ladoC)){
        setMensaje("equilatero")
    }else if (parseInt(triangulo.ladoA) === parseInt(triangulo.ladoB) || parseInt(triangulo.ladoA) === parseInt(triangulo.ladoC)){
        setMensaje("isoseles")
    } else{
        setMensaje("escaleno")
    }
  }
  const Calcular = (e) => {
    e.preventDefault()
    if(parseInt(triangulo.ladoA) > 0 && parseInt(triangulo.ladoB) > 0 && parseInt(triangulo.ladoC) > 0){
        const perimetro = parseInt(triangulo.ladoA) + parseInt(triangulo.ladoB) + parseInt(triangulo.ladoC)
        console.log(perimetro)
        Tipo()
    }else{
        setMensaje("no se admiten negativos")
    }
  }

  return (
    <>
      <h1>Ingrese los lados de un triangulo </h1>
      <form action="submit" onSubmit={Calcular}>
        <label htmlFor="ladoA">Lado A</label>
      <input type="number" 
        value={triangulo.ladoA} 
        onChange={(e) => setTriangulo({ ...triangulo, ladoA: e.target.value })} /> <br />
      <label htmlFor="ladoB" >Lado B</label>
      <input type="number"
        value={triangulo.ladoB}
        onChange={(e) => setTriangulo({ ...triangulo, ladoB: e.target.value })} /> <br />
      <label htmlFor="ladoC">Lado C</label>
      <input type="number" 
      value={triangulo.ladoC} 
      onChange={(e) => setTriangulo({ ...triangulo, ladoC: e.target.value })} /> <br />
      <button type='submit'>Calcular</button>
      </form>
    <p>{mensaje}</p>
    </>

  );
};

export default Triangulo;