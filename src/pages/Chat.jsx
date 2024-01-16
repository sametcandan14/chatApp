import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import Message from "../components/Message";
const Chat = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  const messagesCol = collection(db, "messages");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value === "") return;

    addDoc(messagesCol, {
      text: e.target[0].value,
      user: auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    });
    e.target[0].value = "";
  };

  useEffect(() => {
    const queryOptions = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    onSnapshot(queryOptions, (snapshot) => {
      let comingMessages = [];
      snapshot.forEach((doc) => comingMessages.push(doc.data()));
      setMessages(comingMessages);
    });
  }, []);
  return (
    <div className="chat">
      <header>
        <p className="user">{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <a style={{ cursor: "pointer" }} onClick={() => setRoom(null)}>
          Change Room
        </a>
      </header>
      <main>
        {messages.map((msg) => (
          <Message msg={msg} user={auth.currentUser.displayName} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input placeholder="type your message..." type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
