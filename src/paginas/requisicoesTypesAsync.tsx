import { Produto } from "../types/produtos";



function requisicoesTypesAsync (){
const carregarProdutos = async () => {
    let response = await fetch ("https://fakestoreapi.com/products");
    let json = await response.json ();

    const dataArray = Array.isArray(json) ? json: [json]
    setProdutos (dataArray);


 

 }

}



function setProdutos(dataArray: any[]) {
    throw new Error("Function not implemented.");
}


export default requisicoesTypesAsync