import { useState } from "react";
import { Produto } from "../types/produtos";

function RequisicoesTypes (){
    const [produtos, setProdutos] = useState <Produto[]>([]);

const carregarProdutos2 = () => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        setProdutos(json);
    })


    alert('Executou este processo');

}

const [loading, setLoading] = useState (false);
const carregarProdutos = async () => {
    setLoading(true);
    let response = await fetch("https://fakestoreapi.com/products");
    let json = await response.json();

    const dataArray = Array.isArray(json) ? json: [json]
    setLoading (false);
    setProdutos(dataArray);
}






















return(
<div>

    <h1>essa é a pag requisicoes types</h1>
    <button onClick={carregarProdutos}>Carregar produtos</button>
    {produtos.map((item, index) => (
        <div key={index} >
            <img src={item.image} className ='products' />
            {item.title}
            <br />
            {item.description}
            <br />
            <hr />

{loading &&
<div> Carregando conteudo ...  </div>
}


{!loading &&
<div>
    <h1>  Pag ex de requisicoes  </h1>

    <button onClick={carregarProdutos}>Carregar produtos </button>
    <br />
    total de produtos: {produtos.length}
    
</div>




}




        </div>

   
        




    
    ) )}

</div>

)

















}

export default RequisicoesTypes