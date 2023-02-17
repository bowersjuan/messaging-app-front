import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./MessageDetails.css"

const API = process.env.REACT_APP_API_URL;
const rand = 21 + Math.floor(Math.random() + 20)

function MessageDetails() {
    const [message, setMessage] = useState("")
    const [sender, setSender] = useState()
    const { id, idx } = useParams()

    useEffect(() => {
        axios.get(`${API}/users/${id}/messages/${idx}`)
        .then((res) => {
            setMessage(res.data)
        })
        .catch((err) => console.error(err))
    }, [id, idx])

    useEffect(() => {
        axios.get(`${API}/users/${message.sender_id}`)
        .then((res) => setSender(res.data))
        .catch((err) => console.error(err))
    }, [id, message.sender_id])
    
    return (
        <div className="message-details-container">
            <br></br>
            <div className="details">
                <section id="top-section">
                    <p>{message.favorite ? "❤️" : null}</p>
                    <img alt="user" src={`https://fakeface.rest/thumb/view?minimum_age=21&maximum_age=${rand}`}/>
                    <p>{message.favorite ? "❤️" : null}</p>
                </section>
                <p className="subtitle">- Message -</p>
                <p>{message?.message}</p>
                <hr></hr>
                <p className="subtitle">- TimeStamp -</p>
                <p>{message?.time_sent}</p>
                <hr></hr>
                <p className="subtitle">- Sender -</p>
                <p>{sender?.username}</p>
            </div>

        </div>
    )
}

export default MessageDetails;