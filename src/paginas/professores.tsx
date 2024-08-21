import { useState } from "react";
import Cabecalho from "../componentes/cabecalho";
import { time } from "console";

function Professores(){
        
        /* variaveis*/
        let numero: number;


        /*constantes */

        const[nome, setNome] = useState ('');
        const[apelido, setApelido] = useState ('');
        const[time, setTime] = useState ('');

        /*funcoes*/
        function handleInput (event: React.ChangeEvent<HTMLInputElement>){
           setNome(event.target.value)
        }
        function handleInput2 (event: React.ChangeEvent<HTMLInputElement>){
            setApelido(event.target.value)
         }

         function handleInput3 (event: React.ChangeEvent<HTMLInputElement>){
            setTime(event.target.value)
         }

    return(
    <div>
            <Cabecalho/>
        pagina sobre professores 
        <hr />


    
        <div>
            {/* formulario*/}

            <input type="text" placeholder="Nome" onChange={handleInput} /> <br />
            O nome digitado é: {nome} <br />
            <input type="text" placeholder="Apelido"onChange={handleInput2}/><br />
            Seu apelido é: {apelido} <br />
            <input type="text" placeholder="Time"onChange={handleInput3}/><br />
            Seu time é: {time} <br />



        </div>





    </div>
    )

}

export default Professores;