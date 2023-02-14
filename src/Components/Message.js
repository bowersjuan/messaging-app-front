import {Link} from "react-router-dom"
import { formatTimeStamp } from "../Helpers/formatters";
import "./Message.css"

function Message({message}) {
  return (
    <Link to={`${message.id}`} className="message-container">
      <div className="message">
        <img alt="user" src="https://fakeface.rest/thumb/view?minimum_age=21&maximum_age=40"/>
        <div>
          <p id="name">Juan Bowers</p>
          <p>{message.message}</p>
        </div>
      </div>
      <p id="time-stamp">{formatTimeStamp(message.timesent)}</p>
    </Link>
  )
}

export default Message;