import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./firebase";
import Login from "./Login";
import Register from "./Register";
import TestAuth from "./TestAuth";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div>
      {!user && <Login setUser={setUser} />}
      {!user && <Register setUser={setUser} />}
      {user && <TestAuth />}
    </div>
  );
}

export default App;
