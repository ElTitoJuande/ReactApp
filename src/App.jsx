import { useState } from 'react'
import Card from './components/Card'
import Hijo from './components/Hijo';
import Componente from './components/Componente';
import Post from './components/Post';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Soporte from './pages/Soporte';
import Nav from './components/Nav';
import Error404 from './pages/Error404';

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

      {/* <Post/> */}
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/soporte' element={<Soporte/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default App
