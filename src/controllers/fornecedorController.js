import * as fornecedorService
from '../services/fornecedorService.js';

export async function cadastrarFornecedor(req, res) {

    try {

        const fornecedor =
            await fornecedorService.cadastrarFornecedor(req.body);

        return res.status(201).json(fornecedor);

    } catch (error) {

        return res.status(400).json({
            error: error.message
        });
    }
}

export async function excluirFornecedor(req, res) {

    try {

        const resultado =
            await fornecedorService.excluirFornecedor(
                req.params.id
            );

        return res.status(200).json(resultado);

    } catch (error) {

        return res.status(400).json({
            error: error.message
        });
    }
}