import { Request, Response } from 'express';
export default (req: Request, res: Response) => {
	res.send({
		user: 'test user',
		password: 'jASDj@jss20424F'
	});
	res.sendStatus(200);
};
// export async (req:Request, res:Response) => {
//     try {

//     } catch (error) {

//     }
// };
