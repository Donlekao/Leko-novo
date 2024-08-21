
type Contaspagar ={
    Descrição: String;
    Vencimento: String;
    Valor: String;
}

function Contaspagar(valores:Contaspagar){



    return(
        <div>

            Lista de contas a pagar
            <hr />
            A Descrição da conta é: {valores.Descrição}
            <br />
            O vencimento para: {valores.Vencimento}
            <br />
            O valor é de: {valores.Valor}
        </div>
    )
}
export default Contaspagar;