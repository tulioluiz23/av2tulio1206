


//Receber o seletor do formulario 
var formaCaes = document.getElementById("formCaes");

// Aguardar o usuario clicar no botao cadastrar do form.
formaCaes.addEventListener("submit", (e) => {
    // Nao recarregar a pagina
    e.preventDefault();
    //Receber os dados do form
    var nameCao = document.getElementById("nameCao").value;
    var sexoCao = document.getElementById("sexo").value;
    var racaCao = document.getElementById("racaCao").value;
    // Regex para nao cadastrar item vazio ou com espaço.
    if (nameCao.replace(/\s/g, "")=="") return      
    // Array é usado para criar Array de objetos
    let Cao = new Array();
    // Verifica se á propriedade no localStorage
    if(localStorage.hasOwnProperty("Cao")){
        // Recuperar os valores da propriedade usuarios do localStorage
        // Convert de String para Object
        Cao = JSON.parse(localStorage.getItem("Cao"));
    }
    // Adicionar um novo objeto no array criado.
    Cao.push({nameCao, sexoCao, racaCao})    
    // Salvar no localStorage
    localStorage.setItem("Cao", JSON.stringify(Cao));
    // Update a lista de racas.
    UpdateCaoList(Cao)
    // Limpar o input nome da raça
    document.getElementById("nameCao").value="";   
});



// Atualizar a lista de racas no dom
const CaoList = document.getElementById("caosCadastradas")

function UpdateCaoList(array){
    CaoList.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const Cao = array[i];
        const CaoDiv = document.createElement("div");
        CaoDiv.classList.add("caes");
        CaoDiv.innerHTML = `NOME: ${Cao.nameCao}\n GENERO: ${Cao.sexoCao}\n RAÇA: ${Cao.racaCao} `
        CaoList.appendChild(CaoDiv);
        CaoDiv.setAttribute("data-index", i);
        CaoDiv.onclick=()=>deleteCao(i);
    }
}

function deleteCao(index) {
    let Cao = new Array();
    // Verifica se á propriedade no localStorage
    if(localStorage.hasOwnProperty("Cao")){
        // Recuperar os valores da propriedade usuarios do localStorage
        // Convert de String para Object
        Cao = JSON.parse(localStorage.getItem("Cao"));
    }
    Cao.splice(index,1)
     // Salvar no localStorage
     localStorage.setItem("Cao", JSON.stringify(Cao));
     // Update a lista de racas
     UpdateCaoList(Cao)
}


// Atualiza a lista apos atualizar a pagina
window.addEventListener('DOMContentLoaded', ()=>{
    let Cao = new Array();
    // Verifica se á propriedade no localStorage
    if(localStorage.hasOwnProperty("Cao")){
        // Recuperar os valores da propriedade usuarios do localStorage
        // Convert de String para Object
        Cao = JSON.parse(localStorage.getItem("Cao"));
    }
    UpdateCaoList(Cao)
});




// Puchar raças cadastradas
const RacasList=document.getElementById("racaCao")

function callRacas() {
    let racas = new Array();
    // Verifica se á propriedade no localStorage
    if(localStorage.hasOwnProperty("racas")){
        // Recuperar os valores da propriedade usuarios do localStorage
        // Convert de String para Object
        racas = JSON.parse(localStorage.getItem("racas"));
    }
    for (let i = 0; i < racas.length; i++) {
        const raca = racas[i];
        const racaDiv = document.createElement("option");
        racaDiv.setAttribute("data-value", raca.nameRaca)        
        racaDiv.innerHTML = raca.nameRaca;
        RacasList.appendChild(racaDiv);
    }

}
// Atualiza a lista apos atualizar a pagina
window.addEventListener('DOMContentLoaded', callRacas);