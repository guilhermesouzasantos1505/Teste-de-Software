export async function cadastrarFornecedor(dados) {

    const { nome, cnpj } = dados;

    if (!nome || !cnpj) {
        throw new Error('Dados invalidos');
    }

    return {
        id: 1,
        nome,
        cnpj
    };
}

export async function excluirFornecedor(id) {

    if (!id) {
        throw new Error('ID invalido');
    }

    return {
        message: 'Fornecedor excluido'
    };
}