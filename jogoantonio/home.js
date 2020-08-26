document.getElementById('nome').value = localStorage.nome;
if(nome.value == "undefined"){nome.value = ''}

var salvarlocal = function () {
    var nome = document.getElementById('nome').value
    localStorage.setItem('nome', nome)
    
    
}

document.onchange = salvarlocal()
function local() {
    window.location.href = 'central.html'
}