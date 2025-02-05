import { useState } from 'react'
import Card from './components/Card'
import Hijo from './components/Hijo';
import Componente from './components/Componente';
import Post from './components/Post';

function App() {

  // const [estado, setEstado] = useState(true);

  // function cambiar() {
  //   setEstado(!estado);
  // }
  // let islogin = (nombre) => {
  //   setNombre(nombre);
  // }

  // const [nombre, setNombre] = useState(" ");
  
  // const [estado, setEstado] = useState(true);

  // function ocultarMostrar() {
  //   setEstado(!estado);
  // }


  return (
    <>
      {/* <Card estado={estado} />
      <button onClick={cambiar}>{ estado ? "Desactivar" : "Activar" }</button> */}

      {/* <h2>Hola usuario: {nombre}</h2>
      <Hijo login={setNombre} /> */}

      {/* <button onClick={ocultarMostrar}>{estado ? "Ocultar" : "Mostrar"}</button>

      {estado && <Componente />} */}

      <Post/>
    </>
  )
}

export default App
