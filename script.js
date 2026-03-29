// script.js

// Salva os dados no "HD" do navegador
function salvarDados(dados) {
    localStorage.setItem('minha_agenda_persistencia', JSON.stringify(dados));
}

// Busca os dados salvos. Se não houver nada, retorna null.
function carregarDados() {
    const dados = localStorage.getItem('minha_agenda_persistencia');
    return dados ? JSON.parse(dados) : null;
}
