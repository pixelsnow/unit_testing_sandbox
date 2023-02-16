import './App.css';
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');

  const [updated, setUpdated] = useState(username);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = () => {
    console.log("button works")
    setUpdated(username);
    if (username.length < 3) {
      console.log("Username too short")
    }

    if (username.length > 20) {
      console.log("Username too long")
    }
  };
  
  return (
    <div>
      <input 
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={username}
      />

      <h2>Username: {username}</h2>

      <h2>Updated: {updated}</h2>

      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
