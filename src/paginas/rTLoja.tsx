import { useState } from "react";
import { Carrinho } from "../types/carrinho";


function RTLoja (){
    const [carrinho, setCarrinho] = useState <Carrinho[]>([]);

const carregarCarrinho = () => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        setCarrinho(json);
    })


    alert('Executou este processo');

}

return(
<div>

    <h1> essa é a pagina RTLOJA </h1>
    <button onClick={carregarCarrinho}>Carregar produtos</button>
    {carrinho.map((item, index) => (
        <div key={index} >
            <img src={item.image} className ='products' />
            {item.title}
            <br />
            {item.count}
            <br />
            <hr />
            {/* criando botão para a aplicação da função*/

}

        </div>


    
    ) )}

    </div>

)}

export default RTLoja;









