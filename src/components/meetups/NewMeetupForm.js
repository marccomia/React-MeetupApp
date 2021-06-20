
import { useRef } from 'react'; // react hook

import  Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';

function NewMeetUpForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        // this @meetupData data needs to send to database, therefore this is a react course. 
        // Learning Node.js for how to connect to database server, creating rest api's and much more.
        //typically needs a backend api's to send your request 
        //this app we are using firebase from google to use testing database.
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    {/* not uploading the file it just inserting the url of the image */}
                    <input type='url' required id="image" ref={imageInputRef} />  
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id="description" required row="5" ref={descriptionInputRef} ></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );

}export default NewMeetUpForm;