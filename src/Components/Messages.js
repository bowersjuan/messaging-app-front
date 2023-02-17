import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import Message from "./Message";
import "./Messages.css"

const API = process.env.REACT_APP_API_URL;

function Messages() {
    const [messages, setMessages] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`${API}/users/${id}/messages`)
        .then((response) => setMessages(response.data))
        .catch((e) => console.error(e))
    }, [])

    return (
        <div className="messages">
            {messages.map((message, idx) => {
                return <Message key={idx} message={message}/>
            })}
        </div>
    );
}

export default Messages;