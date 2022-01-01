import clientPromise from '../../utils/mongodb';
import { ObjectId } from 'mongodb';
import axios from 'axios';

export default async function register(req, res) {
  try {
    const { first_name, last_name, birthdate, email, phone_number, level } =
      req.body;

    const client = await clientPromise;
    const db = client.db('anchorstudents');
    
    await db.collection('anchorstudents').insertOne({
      first_name,
      last_name,
      birthdate: new Date(birthdate),
      email,
      phone_number,
      level,
      createdAt: new Date(),
    });
    res.status(201).json({ status: 'updated' });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: 'Unable to register, please contact anchorsports@gmail.com',
    });
  }
}
