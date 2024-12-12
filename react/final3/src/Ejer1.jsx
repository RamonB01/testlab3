import { useState } from "react";

export function Contador(){
    const [cuenta , setCuenta] = useState(5)

    const Incrementar = () =>{
        setCuenta(cuenta + 1)
    }

    const Decrementar = () =>{
        setCuenta(cuenta - 1)
    }

    const ReinciarCuenta = () =>{
        setCuenta(5)
    }

    return(<>
        <h1>{cuenta}</h1>

        <button disabled={cuenta === 10} onClick={Incrementar}>Incrementar</button>
        <button disabled={cuenta === 0} onClick={Decrementar}>Decrementar</button>
        <button onClick={ReinciarCuenta}>Reinciar Contador</button>
    </>)
}

export default Contador