type Props = {
    texto: String
    onClickFN: (txt: String) => void
}

function Filho2 (parametros: Props){

    function HandleClick(){
        parametros.onClickFN("Filho2 texto qualquer")
    
    }

    return(
        <div>
        <hr />
        <h1>Componente Filho2 </h1>
        <hr />
        A prop texto = (parametros.texto)
        <hr />
        <button onClick={HandleClick}> Clique aqui</button>
        </div>
        )
        
        
    }

export default Filho2