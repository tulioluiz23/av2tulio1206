
//Receber o seletor do formulario
var racaForm = document.getElementById("formRaca");

// Aguardar o usuario clicar no botao cadastrar do form
racaForm.addEventListener("submit", (e) => {
    // Nao recarregar a pagina
    e.preventDefault();
    //Receber os dados do form
    var nameRaca = document.getElementById("name").value;
    // Regex para nao cadastrar item vazio ou com espaço
    if (nameRaca.replace(/\s/g, "")=="") return      
    // Array é usado para criar Array de objetos
    let racas = new Array();
    // Verifica se á propriedade no localStorage
    if(localStorage.hasOwnProperty("racas")){
        // Recuperar os valores da propriedade usuarios do localStorage
        // Convert de String para Object
        racas = JSON.parse(localStorage.getItem("racas"));
    }
    // Adicionar um novo objeto no array criado
    racas.push({nameRaca})    
    // Salvar no localStorage
    localStorage.setItem("racas", JSON.stringify(racas));
    // Update a lista de racas
    UpdateRacasList(racas)
    // Limpar o input nome da raça
    document.getElementById("name").value="";   
});


// Atualiza a lista apos atualizar a pagina
window.addEventListener('DOMContentLoaded', ()=>{
    let racas = new Array();
    // Verifica se á propriedade no localStorage
    if(localStorage.hasOwnProperty("racas")){
        // Recuperar os valores da propriedade usuarios do localStorage
        // Convert de String para Object
        racas = JSON.parse(localStorage.getItem("racas"));
    }
    UpdateRacasList(racas)
});

// Atualizar a lista de racas no dom
const RacasList = document.getElementById("racasCadastradas")

function UpdateRacasList(array){
    RacasList.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const raca = array[i];
        const racaDiv = document.createElement("div");
        racaDiv.classList.add("caes");
        racaDiv.innerHTML = raca.nameRaca;
        RacasList.appendChild(racaDiv);
        racaDiv.setAttribute("data-index", i);
        racaDiv.onclick=()=>deleteRacas(i);
    }
}

// Deletar item da lista de racas
function deleteRacas(index) {
    let racas = new Array();
    // Verifica se á propriedade no localStorage
    if(localStorage.hasOwnProperty("racas")){
        // Recuperar os valores da propriedade usuarios do localStorage
        // Convert de String para Object
        racas = JSON.parse(localStorage.getItem("racas"));
    }
    racas.splice(index,1)
     // Salvar no localStorage
     localStorage.setItem("racas", JSON.stringify(racas));
     // Update a lista de racas
     UpdateRacasList(racas)
}