import Details from '../../components/meetups/Details';

export default function MeetupDetail(props) {
  return (
    <Details
      image={props.image}
      title={props.title}
      address={props.title}
      description={props.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetId: 'm1',
        },
      },
      {
        params: {
          meetId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetId = context.params.meetId;

  return {
    props: {
      meetId: meetId,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png',
      title: 'Meetup 1',
      address: 'Some address 5, 12345 Some City',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
    },
  };
}
