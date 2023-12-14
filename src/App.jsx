import Auth from "./pages/Auth";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Chat from "./pages/Chat";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth).catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoom(e.target[0].value);
  };

  if (!isAuth) {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }
  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <form onSubmit={handleSubmit} className="room-container">
          <h1>Chat Room</h1>
          <p>Select a Room</p>
          <input type="text" />
          <button type="submit">Enter Room</button>
          <button onClick={handleLogOut} className="logout" type="button">
            Log Out
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
