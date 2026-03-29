// script.js

function salvarDados(dados) {
    localStorage.setItem('minha_agenda_data', JSON.stringify(dados));
}

function carregarDados() {
    const dados = localStorage.getItem('minha_agenda_data');
    return dados ? JSON.parse(dados) : null;
}
