import express from 'express';

import produtoRoutes from './routes/produto.routes.js';
import fornecedorRoutes from './routes/fornecedor.routes.js';

const app = express();

app.use(express.json());

app.use('/produto', produtoRoutes);
app.use('/fornecedor', fornecedorRoutes);

export default app;