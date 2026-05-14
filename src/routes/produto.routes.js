import express from 'express';
import * as produtoController from '../controllers/produtoController.js';

const router = express.Router();

router.post('/cadastro', produtoController.cadastrarProduto);

export default router;