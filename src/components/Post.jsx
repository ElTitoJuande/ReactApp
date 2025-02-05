import { useEffect, useState } from "react"

const Post = () => {
    //Variable de estado

    const [Posts,setPosts] = useState([]);

    // Código para controlar mediante efecto
    useEffect(()=>{
        console.log("Llamo a la API");
        //llamada a la API
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(respuesta => respuesta.json())
        .then(datos=>setPosts(datos))
    },[]);

    return (
        <>

            <h1>POST</h1>

        </>
    )
}

export default Post