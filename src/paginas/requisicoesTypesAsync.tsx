import { useState } from "react";
import { Produto } from "../types/produtos";



function RequisicoesTypesAsync (){
const [produtos, setProdutos] = useState<Produto[]>([])

const[loading, setLoading] = useState(false)
   
const carregarProdutos = async () => {
    setLoading (true);
    try {
        setProdutos([]);
        let response = await fetch ("https://fakestoreapi.com/products")
        let json = await response.json();

        const dataArray = Array.isArray(json) ? json: [json]
        setLoading (false);
        setProdutos (dataArray);

    } 
    catch (erro){
        setLoading(false);
        alert ('falha ao carregar os produtos, tente novamente mais tarde')
        console.error(erro);
    }


}

const carregarProdutos2 = async () =>{
    setLoading(true);
    let response = await fetch ("https://fakestoreapi.com/products")
    let json = await response.json()

    const dataArray = Array.isArray (json) ? json: [json]
    setLoading(false)
    setProdutos(dataArray)
}

return(
    <div>
        {produtos.map((item,index) =>(
            <div key={index}>
                <img src={item.image} className="produtos" />
                {item.title}
                <br/>
                {item.description}
                <br/>
                <hr />
                </div>

        ))}
        <button onClick={carregarProdutos}> Produtos </button>
        <br />
        <hr />
        {loading &&
        <div>
            Carregando conteudo ...
        </div>}
        {!loading &&
        <div> 0 </div> 
        }
        <br />
        <hr />
        <br />
        <button onClick={carregarProdutos2}> Produtos </button>
        </div>

    )

}
    


export default RequisicoesTypesAsync 