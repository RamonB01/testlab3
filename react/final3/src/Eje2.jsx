import { useState } from "react"

export default function Eje2() {

    const [mensaje, setMensaje] = useState("")
    const [lado1 , setLado1] = useState("")
    const [lado2 , setLado2] = useState("")
    const [lado3 , setLado3] = useState("")

    const mensajeCambio=(e)=>{
        e.preventDefault();
        if (!lado1 || !lado2 || !lado3){
            setMensaje("Porfavor ingrese todos los lados")}
            else if (lado1 ===0 || lado2 ===0 || lado3 === 0 ){
                setMensaje("No se permite el 0")}
            else if (lado1 < 0 || lado2 < 0 || lado3 < 0){
                    setMensaje("No se permiten numeros negativos")}
                    
            else  lado1 === lado2 && lado2 === lado3 ? setMensaje("es equilatero") : lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3 ? setMensaje("es escaleno") : setMensaje("es isosceles")
    }

    return (
        <>
            <h1>Ingrese los 3 lados del Triangulo</h1>
            <form action="submit" onSubmit={mensajeCambio} >
                <input type="number" placeholder="Lado1 " minLength={1} value={lado1} onChange={(e)=> setLado1(e.target.value)} /><br />
                <input type="number" placeholder="Lado2 " minLength={1} value={lado2} onChange={(e)=> setLado2(e.target.value)} /><br />
                <input type="number" placeholder="Lado3 " minLength={1} value={lado3} onChange={(e)=> setLado3(e.target.value)} /><br />
                <p>{mensaje}</p>
                <button type="submit">Calcular</button>
            </form>

        </>
    )


}