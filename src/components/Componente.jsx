import { use } from "react";
import { useEffect, useState } from "react";

const Componente = () => {
    // console.log("Sólo quiero ejecutar este código una sola vez");

    const [estado, setEstado] = useState(true);
    // console.log("Quiero ejecutar este codigo cuando se desmonte")

    //Se ejecuta cada vez que el estado cambie
    // useEffect(() => {
    //     console.log("Componente montado")
    // }, []);
    
    useEffect(()=>{
        return (
            console.log("Componente desmontado")
        )
    });

    function cambiarEstado() {
        setEstado(!estado);
    }

    return (
        <>
            <h1>Componente</h1>
            <button onClick={cambiarEstado}>Cambiar estado</button>

        </>
    )
}

export default Componente