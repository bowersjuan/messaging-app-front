import MessageNewForm from '../Components/Forms/MessageNewForm';

function New({ isLogged }) {
  return (
    <div>
      <h2>Send a New Message</h2>
      <br></br>
      <MessageNewForm isLogged={isLogged} />
    </div>
  );
}

export default New;
