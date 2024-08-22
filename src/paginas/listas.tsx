import ItemLista from "../componentes/itemLista";

function Listas (){

    let ListaSimples = [

        'Alexandre Angelo',
        'Simone',
        'Elisa',
        'Raquel'

    ]

    let ListaObj = [
        {name: 'Alexandre angelo', age: '25'},
        {name: 'Simone', age: '40'},
        {name: 'Raquel', age: '22'},
        {name: 'Elisa', age: '68'}

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
                    <li key={index}> Nome: {item.name } <br /> Idade: {item.age} <hr /></li>

              ) ) }


            </ul>
              <h2> Lista de  Componentes </h2>
              {ListaObj.map((item,index) => (
                <ItemLista dados = {item} />
              )
              )}
        </div>

     )
}




export default Listas;