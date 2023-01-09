import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

export default function HomePage(props) {
  console.log(props.meetups);
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps(context) {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://hama:zaovGHK9dy9mrzPn@cluster0.byhcoaq.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetups = db.collection('meetups');
  const result = await meetups.find().toArray();

  return {
    props: {
      meetups: result.map((m) => {
        return {
          title: m.title,
          address: m.address,
          image: m.image,
          id: m._id.toString(),
        };
      }),
    },
    revalidate: 10,
  };
}
