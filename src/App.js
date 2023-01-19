import { useState } from "react";

import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [updated, setUpdated] = useState(username);

  const handleClick = () => {
    console.log("button works!");
    setUpdated(username);
    if (username.length < 3) {
      console.log("username too short");
    } else if (username.length > 20) {
      console.log("username too long");
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleChange}
        value={username}
      />
      <h2>Username: {username}</h2>
      <h2>Updated: {updated}</h2>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
