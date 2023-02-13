import "./Message.css"

function Message({message}) {
  return (
    <div className="message">
      <div>
        <img alt="user"/>
        <p>User</p>
      </div>
        <p>{message.message}</p>
        <button>
        View Message
        </button>
    </div>
  )
}

export default Message;