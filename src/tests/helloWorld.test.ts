import supertest from 'supertest';
import app from '../app';

describe('Should test application basic structure by testing get helloWorld route', () => {
    it('should return response.status = 200 -- get', async () => {
        const response = await supertest(app).get('/helloWorld/');
        expect(response.status).toBe(200);
    });
});
