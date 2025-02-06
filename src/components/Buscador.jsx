import { useState } from "react"

const Buscador = ({setFiltro}) => {

    function cambiar(e){
        setFiltro(e.target.value)
    }

    return (
        <>

            <input type="search" className="form-control" placeholder="Buscar título" onChange={ (e) => setFiltro(e.target.value) }/>
            {/* <button onClick={buscar}>Buscar</button> */}

        </>
    )
}

export default Buscador