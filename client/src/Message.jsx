function Message({ time, username, body, color }) {
  return (
    <div className="message row">
      <div className="time">{time}</div>
      <div className="message-body row">
        <div className="username" style={{ color: color }}>
          {username}:
        </div>
        <div>{body}</div>
      </div>
    </div>
  );
}

export default Message;
