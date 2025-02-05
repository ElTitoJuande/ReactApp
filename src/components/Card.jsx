const Card = ({estado}) => {
    return (
        <>
            {/* <h2>Componente Card</h2>
            <h3>Nombre: {users.nombre}</h3>
            <h3>Edad: {users.edad}</h3> */}
            {estado? <h2>Activo</h2> : <h2>Inactivo </h2>}
        </>
    )
}

export default Card