import {
    excluirFornecedor
}
from '../../services/fornecedorService.js';

describe('ExclusaoFornecedor', () => {

    test('Excluir fornecedor valido', async () => {

        const resultado =
            await excluirFornecedor(1);

        expect(resultado.message)
            .toBe('Fornecedor excluido');
    });

    test('Excluir sem ID', async () => {

        await expect(
            excluirFornecedor()
        ).rejects.toThrow('ID invalido');
    });

    test('Excluir com ID nulo', async () => {

        await expect(
            excluirFornecedor(null)
        ).rejects.toThrow('ID invalido');
    });
});