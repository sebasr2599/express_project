import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import testRoutepp from './routes/testRoute';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send(`Express + TypeScript Server on port ${port}`);
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);

	testRoutepp(app);
});
