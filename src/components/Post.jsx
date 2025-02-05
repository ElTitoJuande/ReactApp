import { useEffect, useState } from "react"
import './Post.css'
import Buscador from "./Buscador";

const Post = () => {
    //Variable de estado

    const [Posts, setPosts] = useState([]);

    // Código para controlar mediante efecto
    useEffect(() => {
        console.log("Llamo a la API");
        //llamada a la API
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(respuesta => respuesta.json())
            .then(datos => setPosts(datos))
    }, []);

    return (
        <>
            <div className="container mx-auto  border m-5 p-5">
            <Buscador />
                <div className="row p-4">
                    {/* {Posts.map(post => {
                        return (
                            <div className="col-md-4" key={post.id}>
                            { post.title}
                            </div>
                            )
                            })} */}
                    {
                        Posts.map(post => {
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

        </>
    )
}

export default Post