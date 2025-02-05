import { useState } from "react"

const Buscador = () => {

    const [texto, setTexto] = useState();


    function buscarFiltro(){
        this.setTexto({
            value:texto,
        });
        const nuevaInfo = this.state.Post.filter(post =>{
            const postInfo = `${post.title.toLowerCase()}`;
            const textoInfo =texto;

            return postInfo.indexOf(textoInfo);
        });
        this.setTexto({
            Posts:nuevaInfo,
        });
    };
    // function buscar(e) {
    //     return e.filter((e) => {
    //         if(e.title == setBuscar){
    //             return buscar.some((newE)=>{
    //                 return(
    //                     e[newE].toLowerCase()
    //                 )
    //             })
    //         }else if(setBuscar == "All"){
    //             return setBuscar.some((newE)=>{
    //                 return(
    //                     e[newE].toLowerCase()
    //                 );
    //             });
    //         };
    //     });
    // };

    return (
        <>

            <input name="buscador" onChange={texto =>this.buscarFiltro()}/>
            {/* <button onClick={buscar}>Buscar</button> */}

        </>
    )
}

export default Buscador