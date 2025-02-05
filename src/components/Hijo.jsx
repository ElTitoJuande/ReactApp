import { useState } from "react";
import './Hijo.css'

const Hijo = ({ login }) => {
    const [nombre, setNombre] = useState("Juande");

    return (
        <>
            <div className="borde">
                <button onClick={() => login(nombre)}>Enviar</button>
            </div>

        </>
    )
}

export default Hijo