import { useParams } from "react-router-dom";
import Cabecalho from "../componentes/cabecalho";
import Contaspagar from "../componentes/contaspagar";

function AlunoDetalhe(){

    const parametros = useParams();
    return(
        
        <div>
            <Cabecalho/>

                esta pagina é o detalhe do aluno: {parametros.aluno}
                <hr />
                <h3>Contas a pagar</h3>
                <Contaspagar Descrição = 'Conta de energia'
                             Vencimento = '12/07/2024'
                             Valor = '36,70' />
        </div>
    )

}

export default AlunoDetalhe;