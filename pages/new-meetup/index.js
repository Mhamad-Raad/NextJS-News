import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetup) => {
    console.log('fetching');
    const result = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetup),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('fetched');
    const data = result.json();
    console.log(data);
    router.push('/');
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
