import Alunos from "./paginas/alunos";
import Home from "./paginas/home";
import Professores from "./paginas/professores";
import Quemsomos from "./paginas/quemsomos";
import {Routes, Route} from 'react-router-dom';
import Cabecalho from "./componentes/cabecalho";
import AlunoDetalhe from "./paginas/alunoDetalhe";
import Pai from "./paginas/pai";
import Listas from "./paginas/listas";
import Condicao from "./paginas/condicao";
import Requisicoes from "./paginas/requisicoes";
import Loja from "./paginas/loja";
import RTLoja from "./paginas/rTLoja";
import RequisicoesTypes from "./paginas/requisicoesTypes";
import RequisicoesTypesAsync from "./paginas/requisicoesTypesAsync";
import RequisicaoPost from "./paginas/requisicaoPost";


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
        <Route path='/listas'element = {<Listas/>} />
        <Route path="/condicao" element = {<Condicao/>} />
        <Route path="/requisicoes" element = {<Requisicoes/>} />
        <Route path="/loja" element = {<Loja/>} />
        <Route path="/rTLoja" element = {<RTLoja/>} />
        <Route path="/requisicoesType" element = {<RequisicoesTypes/>} />
        <Route path="/requisicoesTypesAsync" element = {<RequisicoesTypesAsync />} />
        <Route path="/requisicaoPost" element = {<RequisicaoPost/>} />

      </Routes>


    </div>
  );
}

export default App;
