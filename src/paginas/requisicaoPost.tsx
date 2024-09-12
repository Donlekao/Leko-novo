import { ChangeEvent, useState } from "react";
import { Usuarios } from "../types/usuarios";
import { title } from "process";
import { ModuloApi } from "../api";

function RequisicaoPost (){

    //cadastro de usuarios//
    
    const [addTitulo, setaddTitulo] = useState ('');
    const [addBody, setaddBody] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeTitulo = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddTitulo (info.target.value);
    }

    const handleChangeBody = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddBody (info.target.value);
    }

    //funções //

    const [usuarios, setUsuarios] = useState <Usuarios[]>([]);

    const carregarUsuarios = async() => {
        setLoading(true);
        let json = await ModuloApi.CarregarUsuarios();
        const Dados = Array.isArray(json) ? json: [json];
        setLoading (false);
        setUsuarios (Dados);



    }

    const AdicionarUsuarios = async () => {

        if (addTitulo && addBody){

            let json = await 
                ModuloApi.AdicionarUsuarios (addTitulo, addBody, 1);
    
        if (json.id){
            alert('Post adicionado com sucesso')
            setUsuarios((usuarios) => [...usuarios,json]);
        }else {
            alert('Ocorreu alguma falha')
        }

    } else {
        alert('preencha as informações');
    }

 }

    return(
            <div>
                {loading &&
                <div> Carregando conteudo ...  </div>
                }


                {!loading &&
                <div>
                    <h1>  Pag ex de requisicoes  </h1>

                    <button onClick={carregarUsuarios}>Carregar produtos </button>
                <br />
                    total de usuarios: {usuarios.length}
                        
            </div>




    }
            
            
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
            <button onClick={AdicionarUsuarios}> Adicionar usuario </button>


        
                <hr />
                 <h1>Consulta de informações</h1>
                 <button onClick={carregarUsuarios}> Carregar </button>
                 <h1>Lista de usuarios</h1>
                {usuarios.map((item, index) => (
                    <div>
                        <h2> Dados de usuario</h2>
                        Titulo: {item.title} <br />
                        User ID: {item.userId} <br />

                    </div>
                ))}

                
                

            </div>


        </div>



    )



}

export default RequisicaoPost;