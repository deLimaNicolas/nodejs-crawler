import logger from '../utils/logger';

describe('should test logger', () => {
    it('should log message', async () => {
        try {
            await logger.log('error', 'log', { message: 'crawler/products' });
        } catch (err) {
            expect(err).not.toBeUndefined();
        }
        expect.assertions(0);
    });
});
