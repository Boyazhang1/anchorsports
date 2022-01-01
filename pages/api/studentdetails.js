import clientPromise from '../../utils/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const query = req.query.username;

  console.log(query);
  const client = await clientPromise;
  const db = client.db('sample_analytics');
  const data = await db.collection('customers').findOne({ username: query });

  res.json(data);
}
