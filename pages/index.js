import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup',
  },
]

export default function HomePage(props) {
  console.log(props.meetups);
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

export async function getStaticProps(context) {
  // fetch data from an API
  console.log('here')
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  }
}
