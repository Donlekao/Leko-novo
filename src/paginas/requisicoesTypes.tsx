import { useState } from "react";
import { Produto } from "../types/produtos";

function RequisicoesTypes (){
    const [produtos, setProdutos] = useState <Produto[]>([]);

const carregarProdutos = () => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        setProdutos(json);
    })


    alert('Executou este processo');

}

return(
<div>
    {produtos.map((item, index) => (
        <div key={index} >
            <img src={item.image} className ='products' />
            {item.title}
            <br />
            {item.description}
            <br />
            <hr />

        </div>


    
    ) )}

    </div>

)

















}