import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.methode === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;

    // fetch data here
    const client = await MongoClient.connect(
      'mongodb+srv://hama:zaovGHK9dy9mrzPn@cluster0.byhcoaq.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetups = db.collection('meetups');

    const result = await meetups.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'data has been added successfully' });
  }
};

export default handler;
