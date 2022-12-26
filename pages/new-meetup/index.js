import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const addMeetupHandler = (enteredMeetup) => {
    console.log(enteredMeetup);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
