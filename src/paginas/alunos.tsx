import Cabecalho from "../componentes/cabecalho";
import { Link } from "react-router-dom";

function Alunos(){
    return(
    <div>
        <Cabecalho/>
        <Link to = '/alunos/Alexandre'> <div> Alexandre</div></Link>
        <Link to = '/alunos/Paula'> <div> Paula </div></Link>
        <Link to = '/alunos/Angelo'> <div> Angelo </div> </Link>
    </div>
    )

}

export default Alunos;