import {
    cadastrarFornecedor
}
from '../../services/fornecedorService.js';

describe('CadastroFornecedor', () => {

    test('Fornecedor valido', async () => {

        const fornecedor =
            await cadastrarFornecedor({
                nome: 'Fornecedor A',
                cnpj: '123'
            });

        expect(fornecedor.nome)
            .toBe('Fornecedor A');
    });

    test('Fornecedor sem nome', async () => {

        await expect(
            cadastrarFornecedor({
                cnpj: '123'
            })
        ).rejects.toThrow('Dados invalidos');
    });

    test('Fornecedor sem cnpj', async () => {

        await expect(
            cadastrarFornecedor({
                nome: 'Fornecedor'
            })
        ).rejects.toThrow('Dados invalidos');
    });
});
