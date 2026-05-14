import * as produtoService from '../services/produtoService.js';

export async function cadastrarProduto(req, res) {

    try {

        const produto =
            await produtoService.cadastrarProduto(req.body);

        return res.status(201).json(produto);

    } catch (error) {

        return res.status(400).json({
            error: error.message
        });
    }
}