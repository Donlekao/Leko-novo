import Filho from "./filho"
import Filho2 from "./filho2"


function Pai(){

    function eventActionButtonPai(txt: String){
        alert (txt )
    }

    function eventActionButtonPai2(txt: String){
        alert (txt)
    }

    return(
        <div>
            <hr />
            <h1>Componente pai </h1>
            <hr />
            <Filho texto = 'Passado pelo pai'
             onClickFN = {eventActionButtonPai}/>
            <br/>
            <hr />
            <Filho2 texto = 'Passado pelo pai'
             onClickFN = {eventActionButtonPai2}/>
            <br/>


            
            <hr />

            </div>

    )

}

export default Pai


