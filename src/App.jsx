import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "./firebase/firebaseConfig";

function App() {
  const handleClick = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <h1> Kayıt Ol / Giriş Yap</h1>
      <button onClick={handleClick}>Google ile giriş yap</button>
    </>
  );
}

export default App;
