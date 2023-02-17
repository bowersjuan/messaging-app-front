import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { formatTimeStamp } from "../Helpers/formatters";
import "./Message.css"

function Message({message}) {
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")))
  }, [])
  
  return (
    <Link to={`${message.user_id}`} className="message-container">
      <div className="message">
        <img alt="user" src="https://fakeface.rest/thumb/view?minimum_age=21&maximum_age=40"/>
        <div>
          <p>{message.message}</p>
          <p id="name">- {user?.name}</p>
        </div>
      </div>
      <p id="time-stamp">{formatTimeStamp(message.time_sent)}</p>
    </Link>
  )
}

export default Message;