import { Express } from 'express';
import testController from '../controllers/test.controller';
export default (app: Express) => {
	app.get('/test', testController);
};
