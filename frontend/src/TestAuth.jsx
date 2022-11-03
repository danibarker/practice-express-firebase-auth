import React, { useState } from "react";
import auth from "./firebase";

function TestAuth() {
  const [user, setUser] = useState(null);

  const testAuth = async () => {
    const token = await auth.currentUser.getIdToken();

    const response = await fetch("/api/menu/test", {
      headers: { authorization: `Bearer ${token}` }
    });
    const data = await response.json();
    setUser(data);
  };

  return (
    <div>
      <h1>Test Auth</h1>
      <button onClick={testAuth}>Test Auth</button>
      <pre>{user && <p>{JSON.stringify(user, null, 2)}</p>}</pre>
    </div>
  );
}

export default TestAuth;
