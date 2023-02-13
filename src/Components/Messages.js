import {useState, useEffect} from "react"
import axios from "axios"
import Message from "./Message";
import "./Messages.css"

const API = process.env.REACT_APP_API_URL;

function Messages() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        axios.get(`${API}/messages`)
        .then((response) => setMessages(response.data))
        .catch((e) => console.error(e))
    }, [])

    return (
        <div className="messages">
            {messages.map((message) => {
                return <Message key={message.id} message={message}/>
            })}
        </div>
    );
}

export default Messages;