import '../../estilo/estilo.css'
type Props = {
    dados: {
        name: string;
        age: string;
    }
}

function ItemLista ({dados}: Props){
    return(
        <div>

            <hr />
               Meu nome é: {dados.name}
               <hr />
                <br />
               Minha idade é: {dados.age}
               <hr />
               <br />

            <hr />






        </div>



    )
}

export default ItemLista