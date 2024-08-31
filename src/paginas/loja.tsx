import ItemLista from "../componentes/itemLista";
import ItemLoja from "../componentes/itensLoja";

function Loja(){

    let ListaSimples = [

        'numero de itens no carrinho',
        'Nome do item no carrinho'
        

    ]

    let ListaObj = [
        {nome: 'numero de itens no carrinho', item: 'Nome do item'},
        {nome: 'Nome do item no carrinho', item: 'Nome do item'}
        

    ]

    return(
        <div>
            <hr />
            COMPONENTES LISTAS 
            <hr />

            <h2> Lista Simples</h2>
            <ul>
                {ListaSimples.map((item, index) => (
                    <li key={index}>{item}</li>

              ) ) }
            <h2> Lista Simples</h2>
            
                {ListaObj.map((item, index) => (
                    <li key={index}> Numero de itens: {item.item } <br /> Nome: {item.nome} <hr /></li>
                    
              ) ) }


            </ul>
              <h2> Lista de  Componentes </h2>
              {ListaObj.map((item,index) => (
                <ItemLoja dados = {item} />
              )
              )}
        </div>

     )
}




export default Loja;