import { ChangeEvent, useState } from "react";
import { Usuarios } from "../types/usuarios";

function RequisicaoPost (){

    //cadastro de usuarios//
    
    const [addTitulo, setaddTitulo] = useState ('');
    const [addBody, setaddBody] = useState('');

    const handleChangeTitulo = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddTitulo (info.target.value);
    }

    const handleChangeBody = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddBody (info.target.value);
    }

    //funções //

    const [usuarios, setUsuarios] = useState <Usuarios[]>([]);

    const carregarUsuarios = async() => {
        let response = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
        let json = await response.json();
        const Dados = Array.isArray(json) ? json: [json];
        setUsuarios (Dados);



    }

    const handleAddClick = async () => {
        if( addTitulo && addBody){
            
        }

    }

    return(
        <div>

            <div>
                <h1> Cadastro de usuarios </h1>
                <input type="text" 
                placeholder="Titulo" 
                onChange={handleChangeTitulo}
                />



                <br /><hr />
                <input type="text" 
                placeholder="Body" 
                onChange={handleChangeBody}
                
                />

                <hr />
                 <h1>Consulta de informações</h1>
                 <button onClick={carregarUsuarios}> Carregar </button>
                 <h1>Lista de usuarios</h1>
                {usuarios.map((item, index) => (
                    <div>
                        <h2> Dados de usuario</h2>
                        Titulo: {item.titile} <br />
                        User ID: {item.userId} <br />

                    </div>
                ))}

                


            </div>


        </div>



    )



}

export default RequisicaoPost;