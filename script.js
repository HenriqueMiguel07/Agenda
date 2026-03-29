// script.js

// Função para salvar (chame sempre que o valor mudar)
export const salvarDados = (valor) => {
    localStorage.setItem('dados_zenblocks', JSON.stringify(valor));
    console.log("Dados salvos no localstorage!");
};

// Função para carregar (chame ao iniciar o app)
export const carregarDados = () => {
    const dados = localStorage.getItem('dados_zenblocks');
    return dados ? JSON.parse(dados) : null;
};
