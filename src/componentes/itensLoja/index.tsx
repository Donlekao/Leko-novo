import '../../estilo/estilo.css'
type Props = {
    dados: {
        nome: string,
        item: string        
    }
}

function ItemLoja ({dados}: Props){
    return(
        <div>

            <hr />
               O numero de itens é: {dados.item}
               <hr />
                <br />
            O nome do item é: {dados.nome}
            <hr />
            <br />

        </div>



    )
}

export default ItemLoja