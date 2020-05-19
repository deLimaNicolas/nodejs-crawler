import { Request, Response, Router } from 'express';

const helloWorld: Router = Router();

helloWorld.get('/', (req: Request, res: Response) => res.send('Hello World!'));

export default helloWorld;
