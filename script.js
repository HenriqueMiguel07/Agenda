// --- LÓGICA DE ARMAZENAMENTO (O "HD" do seu App) ---

// Função para salvar qualquer dado (Blocos, Gastos, etc)
export const salvarNoCelular = (chave, dados) => {
    // Transformamos o objeto em string para o navegador aceitar
    localStorage.setItem(chave, JSON.stringify(dados));
};

// Função para buscar os dados quando o app abrir
export const carregarDoCelular = (chave) => {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : null;
};

// Exemplo de uso para o seu ZenBlocks:
// const meusGastos = [{id: 1, nome: 'Ração', valor: 150}];
// salvarNoCelular('gastos_pet', meusGastos);
