import { useHistory } from "react-router-dom"; //hooks
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {

  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // for sending hhtp request use fetch(httpreuest STRING, method object) buildin javascript nothing tod do with react
    // allowed us to send http request or we can use axios
    //add /meetups.js
    fetch(
      "https://react-started-crashcourse-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() =>{
      history.replace('/'); //redirect to homepage
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetUpPage;
