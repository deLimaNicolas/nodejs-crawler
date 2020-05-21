import { Router } from 'express';
import crawler from './crawler';
import helloWorld from './helloWorld';

const mainRouter: Router = Router();

mainRouter.use('/helloWorld', helloWorld);
mainRouter.use('/crawler', crawler);


export default mainRouter;
