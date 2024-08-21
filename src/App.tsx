import Alunos from "./paginas/alunos";
import Home from "./paginas/home";
import Professores from "./paginas/professores";
import Quemsomos from "./paginas/quemsomos";
import {Routes, Route} from 'react-router-dom';
import Cabecalho from "./componentes/cabecalho";
import AlunoDetalhe from "./paginas/alunoDetalhe";
import Pai from "./paginas/pai";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quemsomos" element={<Quemsomos/>} />
        <Route path="/professores" element= {<Professores/>} />
        <Route path="/alunos" element= {<Alunos/>} />
        <Route path="/alunos/:aluno" element = {<AlunoDetalhe/>} />
        <Route path="/pai" element= {<Pai/>} />

      </Routes>


    </div>
  );
}

export default App;
