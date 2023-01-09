import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

import Details from '../../components/meetups/Details';

export default function MeetupDetail(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
      </Head>
      <Details
        image={props.image}
        title={props.title}
        address={props.title}
        description={props.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://hama:zaovGHK9dy9mrzPn@cluster0.byhcoaq.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetups = db.collection('meetups');
  const result = await meetups.find().toArray();
  client.close();

  return {
    fallback: 'blocking',
    paths: result.map((r) => ({
      params: {
        meetId: r._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetId = context.params.meetId;

  const client = await MongoClient.connect(
    'mongodb+srv://hama:zaovGHK9dy9mrzPn@cluster0.byhcoaq.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetups = db.collection('meetups');
  const result = await meetups.findOne({ _id: ObjectId(meetId) });
  client.close();

  return {
    props: {
      meetId: result._id.toString(),
      title: result.title,
      image: result.image,
      address: result.address,
      description: result.description,
    },
  };
}
