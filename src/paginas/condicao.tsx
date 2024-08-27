import { useState } from "react";


function Condicao(){

const[show, setshow] = useState (false);
function HandleClickMostrar (){
    setshow (!show);

}
/*function HandleClickMostrar(){
    if(show){
        setshow(false)
    } else{
        setshow(true)

    }
} */

    return(
            <div>
                conteudo condicional
                <hr />
                <button onClick={HandleClickMostrar}> {show ? "ocultar" : "mostrar" } </button>
                <hr />
                    {show === true &&
                    <div> esse texto só sera exibido se o show for a true
                        
                    </div>
                }

            </div>


    )




}

export default Condicao