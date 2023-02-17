import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import './LoginSignupForms.css';

const API = process.env.REACT_APP_API_URL;

function MessageNewForm({ isLogged }) {
  const user = JSON.parse(window.localStorage.getItem('user'));

  const [newMessage, setNewMessage] = useState({
    sender_id: user.id,
    message: '',
    favorite: '',
  });
  const [select, setSelect] = useState(false);

  const [users, setUsers] = useState();

  const { id, idx } = useParams();
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setNewMessage({ ...newMessage, [e.target.id]: e.target.value });
  };

  const handleSelectChange = () => {
    setSelect(!select);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/users/${id}/messages/${idx}`, newMessage)
      .then((res) => {
        navigate(`/users/${res.data.id}/messages`);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .post(`${API}/messages`, newMessage)
      .then((res) => navigate('/'))
      .catch((err) => console.error(err));

    setNewMessage({
      sender_id: user.id,
      message: '',
      favorite: '',
    });
  };

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <label htmlFor="recipient">To: </label>
          <select name="dropdown" id="recipient">
            <option>Choose recipient...</option>
            {users?.map((user, idx) => {
              return (
                <option key={idx} value={user.username.toLowerCase()}>
                  {user.username}
                </option>
              );
            })}
          </select>
          <label htmlFor="username">Message:</label>
          <textarea
            id="message"
            onChange={handleTextChange}
            value={newMessage.message}
            rows="3"
          />
          <label htmlFor="favorite">
            Favorite:{' '}
            <input
              id="favorite"
              type="checkbox"
              onChange={handleSelectChange}
              value={select}
            />
          </label>
          <br></br>
          <input id="submit-button" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

export default MessageNewForm;
