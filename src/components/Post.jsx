import { useEffect, useState } from "react"
import './Post.css'
import Buscador from "./Buscador";

const Post = () => {
    //Variable de estado

    const [posts, setPosts] = useState([]);
    const [filtro, setFiltro] = useState("")
    
    // Código para controlar mediante efecto
    useEffect(() => {
        console.log("Llamo a la API");
        //llamada a la API
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(respuesta => respuesta.json())
            .then(datos => setPosts(datos))
    }, []);

    let entradasFiltradas = posts.filter(entrada=>
        entrada.title.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
            <div className="container mx-auto  border m-5 p-5">
                <div className="row mx-auto p-4">
                    <Buscador setFiltro={setFiltro}/>
                    <div className="row p-4">
                        {
                            entradasFiltradas.map(post => {
                                return (
                                    <div className="col-md-4" key={post.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{post.title} title</h5>
                                                <p className="card-text">{post.body}</p>
                                                <a href="#" className="btn btn-primary">Más información</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Post