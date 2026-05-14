import request from 'supertest';
import app from '../../app.js';

describe('Cadastro Produto E2E', () => {

    test('POST /produto/cadastro', async () => {

        const response = await request(app)
            .post('/produto/cadastro')
            .send({
                nome: 'Teclado',
                preco: 300
            });

        expect(response.statusCode).toBe(201);
    });
});
