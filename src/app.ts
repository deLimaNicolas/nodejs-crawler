import cors from 'cors';
import express from 'express';
import { Application } from 'express';
import routes from './routes/router';

const setUpAppMiddlewaresAndRoutes = (app): void => {
    app.use(express.json());
    app.use(routes);
    app.use(cors())
};

const createApplication = (): Application => {
    const app: Application = express();
    setUpAppMiddlewaresAndRoutes(app);
    return app;
};

export default createApplication();
