import logger from '../utils/logger';

describe('should test logger', () => {
    it('should log message', async () => {
        const a = await logger.log('error', 'log', { message: 'crawler/products' });
        console.log(a)
    });
});
