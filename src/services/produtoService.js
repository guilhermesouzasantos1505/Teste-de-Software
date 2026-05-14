export async function cadastrarProduto(dados) {

    const { nome, preco } = dados;

    if (!nome || !preco) {
        throw new Error('Dados invalidos');
    }

    return {
        id: 1,
        nome,
        preco
    };
}