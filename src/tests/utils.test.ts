import logger from '../utils/logger';

describe('sould test utils', () => {
    it('should test logger', async () => {
        try {
            await logger.log('test', 'test', { message: 'testing' });
        } catch (err) {
            expect(err).not.toBeUndefined();
        }
        expect.assertions(0);
    });
});
