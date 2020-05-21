import getMercadoLivreData from '../utils/crawler'

describe('should test crawler', () => {
    it('should get list of galaxy -- success', async () => {
        const results = await getMercadoLivreData('galaxy');
        expect(results[0].name).not.toBeUndefined();
        expect(results[0].price).not.toBeUndefined();
        expect(results[0].link).not.toBeUndefined();
        expect(results.length).toBeGreaterThan(0);
    });
    it('should get list of galaxy -- success -- passing limit', async () => {
        const results = await getMercadoLivreData('galaxy', 2);
        expect(results[0].name).not.toBeUndefined();
        expect(results[0].price).not.toBeUndefined();
        expect(results[0].link).not.toBeUndefined();
        expect(results.length).toBe(2);
    });
    it('should throw error -- empty result', async () => {
        try {
            await getMercadoLivreData('oksgytdp');
        } catch (err) {
            expect(err.message).toBe('NO_RESULTS_FOUND');
        }
        expect.assertions(1);
    });
});
