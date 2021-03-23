import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.acces_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;