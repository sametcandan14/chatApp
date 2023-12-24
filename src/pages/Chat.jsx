import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";
const Chat = ({ room }) => {
  const messagesCol = collection(db, "messages");
  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(messagesCol, {
      text: e.target[0].value,
      user: auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    });
  };
  return (
    <div className="chat">
      <header>
        <p>Samet</p>
        <p>{room}</p>
        <a href="/">Change Room</a>
      </header>
      <main></main>
      <form onSubmit={handleSubmit}>
        <input placeholder="type your message..." type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
