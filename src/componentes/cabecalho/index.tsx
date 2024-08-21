import '../../estilo/estilo.css';
import { Link } from 'react-router-dom';

function Cabecalho(){
    return(
        <div className='cab_principal'>
                
            <Link to = '/'> <div className='cab_menu'> home </div> </Link>
            <Link to = '/quemsomos'> <div className='cab_menu'> quem somos </div></Link>
            

        </div>
    )
}

export default Cabecalho;