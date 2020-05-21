import { Request, Response, Router } from 'express';
import IServerResponse from '../interfaces/IServerResponse';
import getMercadoLivreData from '../utils/crawler';

const crawler: Router = Router();

crawler.post('/products', async (req: Request, res: Response) => {
    const { search, limit } = req.body;
    try {
        const products = await getMercadoLivreData(search, limit);
        const response: IServerResponse = {
            status: 200,
            response: products,
        };
        res.status(200).json(response);
    } catch (err) {
        const response: IServerResponse = {
            status: 400,
            response: err.message,
        };
        res.status(400).json(response);
    }
});

export default crawler;
