var itemsList = document.getElementById("Lista");

// adicionar items na lista
function ElementoNovo() {
    if (document.getElementById("NovaTask").value !== "") {
        var li = document.createElement("li");
        li.innerHTML = document.getElementById("NovaTask").value;
        // botão de remover
        var remover = document.createElement("a");
        remover.innerHTML = "\u00D7";
        remover.onclick = function() {
            // remove apenas "li", que é o li
            itemsList.removeChild(li);
        }
        // adiciona o link de remover ao li
        li.appendChild(remover);
        // adiciona o li ao ul
        itemsList.appendChild(li);
        document.getElementById("NovaTask").value = "";
    } else{
        alert("Escreva uma tarefa! ")
    }
}

//Adiciona um símbolo de check
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var input = document.getElementById("NovaTask");

// Identifica a tecla enter e clica o botão escondido sozinho
input.addEventListener("keyup", function(event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    document.getElementById("AddTask").click();
  }
});