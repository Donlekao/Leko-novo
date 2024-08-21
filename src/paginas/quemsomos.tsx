import { Link } from "react-router-dom";
import Cabecalho from "../componentes/cabecalho";

function Quemsomos(){
    return(
        <div>
            <Cabecalho/>
            <div>
                <br />
                <div className="qs_container">
                <Link to = "/professores" ><div className="div_professores"> Professores </div></Link>
                <br />
                <Link to = "/alunos"> <div className="div_alunos"> Alunos </div> </Link>
                
                </div>
                quem somos
            

            </div>


        </div>
    )
}

export default Quemsomos;