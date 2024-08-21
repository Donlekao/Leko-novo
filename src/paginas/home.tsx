import Cabecalho from "../componentes/cabecalho";
import Quadrado from "../componentes/quadrado";
import '../estilo/estilo.css';
import { useState } from "react";

//variavel controlada //



// função //
function Home (){
    const[numero, setNumero1] = useState(0);

        function HandleClickButton(){
            setNumero1(numero + 10);
            
        }

        function HandleClickButton2(){
            setNumero1(numero - 10);
            
        }

    return(
        <div>
            <Cabecalho/>
            <p>numero= {numero}</p>
            <hr />
            <button onClick={HandleClickButton}> Somar </button>
            <hr />
            <button onClick={HandleClickButton2}> Subtrair </button> 
            <br />
            <br />
            <br />
    
                <div >
                    corpo da pagina home 
                    <Quadrado/>
                    <br />
                    <Quadrado/>
                </div>

        </div>
    )
}

export default Home;