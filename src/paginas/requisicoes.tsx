import { useState } from "react";
import { Link } from "react-router-dom";


function Requisicoes (){
const [produtos, setProdutos] = useState([]);
const carregarProdutos = () => {
    fetch("https://fakestoreapi.com/products/")
    .then((response) => {
        return response.json();

    })
        .then((json) => {
            setProdutos(json);
        })
    }

return(

<div>
<h1> Pagina exemplo de requisições</h1>
<hr /><br />

{
<button onClick={carregarProdutos}>Carregar produtos</button>
}

Total de produtos: {produtos.length}

</div>

)


}

export default Requisicoes;