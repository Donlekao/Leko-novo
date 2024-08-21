type Props = {
    texto: String
    onClickFN: (txt: String) => void
}

function Filho (parametros: Props){

    function HandleClick(){
        parametros.onClickFN("Filho texto qualquer")
    
    }



    return(
        <div>
        <hr />
        <h1>Componente Filho 1 a</h1>
        <hr />
        A prop texto = {parametros.texto}
        <hr />
        <button onClick={HandleClick}> Clique aqui</button>
        <br />
        <hr />
        <hr />
        






        </div>
        



        )
        
        
    }

export default Filho


