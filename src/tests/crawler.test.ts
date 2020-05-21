import supertest from 'supertest';
import app from '../app';
import getMercadoLivreData from '../utils/crawler';

describe('should test crawler', () => {
    it('should get list of galaxy -- success', async () => {
        const results = await getMercadoLivreData('galaxy');
        expect(results[0].name).not.toBeUndefined();
        expect(results[0].price).not.toBeUndefined();
        expect(results[0].link).not.toBeUndefined();
        expect(results.length).toBeGreaterThan(0);
    });
    it('should get list of galaxy -- success -- request', () => {
        supertest(app)
            .post('/crawler/products')
            .send({
                'limit': 5,
                'search': 'galaxy'
            })
            .expect('Content-Type', /json/)
            .expect(200);
    });
    it('should get list of galaxy -- success -- passing limit', async () => {
        const results = await getMercadoLivreData('galaxy', 2);
        expect(results[0].name).not.toBeUndefined();
        expect(results[0].price).not.toBeUndefined();
        expect(results[0].link).not.toBeUndefined();
        expect(results.length).toBe(2);
    });
    it('should throw error -- empty -- failure', async () => {
        try {
            await getMercadoLivreData('oksgytdp');
        } catch (err) {
            expect(err.message).toBe('NO_RESULTS_FOUND');
        }
        expect.assertions(1);
    });
    it('should get list of galaxy -- failure -- request', () => {
        supertest(app)
            .post('/crawler/products')
            .send({
                'limit': 5,
                'search': 'galaxy'
            })
            .expect('Content-Type', /json/)
            .expect(400);
    });
});
