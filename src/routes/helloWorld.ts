import { Request, Response, Router } from 'express';

const helloWorld: Router = Router();

helloWorld.get('/hi', (req: Request, res: Response) => res.send('Hello World!'));

export default helloWorld;
