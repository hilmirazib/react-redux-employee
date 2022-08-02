// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '../../../database/conn';
import { getUsers, postUsers, putUsers, deleteUsers } from '../../../database/controller';

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ message: 'MongoDB connection failed' }));

    //type of request
    const { method } = req;
    switch (method) {
        case 'GET':
            getUsers(req, res);
            break;
        case 'POST':
            postUsers(req, res);
            break;
        case 'PUT':
            putUsers(req, res);
            break;
        case 'DELETE':
            deleteUsers(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}