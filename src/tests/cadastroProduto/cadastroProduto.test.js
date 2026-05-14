import { cadastrarProduto }
from '../../services/produtoService.js';

describe('CadastroProduto', () => {

    test('Cadastrar produto valido', async () => {

        const produto = await cadastrarProduto({
            nome: 'Notebook',
            preco: 5000
        });

        expect(produto.nome).toBe('Mouse');
    });

    test('Produto sem nome', async () => {

        await expect(
            cadastrarProduto({
                preco: 5000
            })
        ).rejects.toThrow('Dados invalidos');
    });

    test('Produto sem preco', async () => {

        await expect(
            cadastrarProduto({
                nome: 'Mouse'
            })
        ).rejects.toThrow('Dados invalidos');
    });
});