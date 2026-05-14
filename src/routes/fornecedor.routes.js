import express from 'express';
import * as fornecedorController
from '../controllers/fornecedorController.js';

const router = express.Router();

router.post(
    '/cadastro',
    fornecedorController.cadastrarFornecedor
);

router.delete(
    '/:id',
    fornecedorController.excluirFornecedor
);

export default router;