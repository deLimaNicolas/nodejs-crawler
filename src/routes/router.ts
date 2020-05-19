import { Router } from 'express';
import helloWorld from './helloWorld';

const mainRouter: Router = Router();

mainRouter.use('/helloWorld', helloWorld);

export default mainRouter;
