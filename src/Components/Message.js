import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { formatTimeStamp } from "../Helpers/formatters";
import "./Message.css"

const API = process.env.REACT_APP_API_URL;

function Message({message}) {
  const [sender, setSender] = useState()

  const rand = 21 + Math.floor(Math.random() * 20)

  useEffect(() => {
    axios.get(`${API}/users/${message.sender_id}`)
    .then((res) => setSender(res.data))
    .catch((err) => console.error(err))
  }, [message.sender_id])
  
  return (
    <div >
      <Link to={`${message.message_id}`} className="message-container">
      <div className="message">
        <img alt="user" src={`https://fakeface.rest/thumb/view?minimum_age=21&maximum_age=${rand}`}/>
        <div>
          <p id="from">From: {sender?.username}</p>
          <p>{message.message}</p>
        </div>
      </div>
      {formatTimeStamp(message.time_sent)}
    </Link>
    </div>
  )
}

export default Message;