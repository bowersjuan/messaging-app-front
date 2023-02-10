import {useState, useEffect} from "react"
import axios from "axios"

const API = process.env.REACT_APP_API_URL;

function Messages() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        axios.get(`${API}/messages`)
        .then((response) => setMessages(response.data))
        .catch((e) => console.error(e))
    }, [])

    return (
        <div>
            {messages.map((message) => {
                return <li>{message.message}</li>
            })}
        </div>
    );
}

export default Messages;