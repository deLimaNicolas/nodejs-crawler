import { Request, Response, Router } from 'express';
import IServerResponse from '../interfaces/IServerResponse';
import getMercadoLivreData from '../utils/crawler';
import logger from '../utils/logger';

const crawler: Router = Router();

crawler.post('/products', async (req: Request, res: Response) => {
    const { search, limit } = req.body;
    logger.log('info', 'log', { message: 'crawler/products', event: JSON.stringify(req.body) });
    try {
        const products = await getMercadoLivreData(search, limit);
        const response: IServerResponse = {
            status: 200,
            response: products,
        };
        res.status(200).json(response);
    } catch (err) {
        logger.log('error', 'log', { message: err.message });
        const response: IServerResponse = {
            status: 400,
            response: err.message,
        };
        res.status(400).json(response);
    }
});

export default crawler;
