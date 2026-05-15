import request from 'supertest';
import app from '../../app.js';

describe('Excluir fornecedor E2E', () => {

    test('DELETE fornecedor', async () => {

        const response = await request(app)
            .delete('/fornecedor/1');

        expect(response.statusCode).toBe(200);
    });
});
