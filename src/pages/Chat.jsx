const Chat = ({ room }) => {
  return (
    <div className="chat">
      <header>
        <p>Samet</p>
        <p>{room}</p>
        <a href="/">Change Room</a>
      </header>
      <main></main>
      <form action="">
        <input placeholder="type your message..." type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
