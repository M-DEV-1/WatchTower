// frontend/src/App.jsx
import React, { useEffect, useState } from 'react';
import { getHelloMessage } from './api';
import WebcamCapture from './components/webcam.jsx';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getHelloMessage()
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error("Error fetching message:", err);
        setError("Failed to connect to the backend.");
      });
  }, []);

  return (
    <>
    <div className="App">
      <h1>{message || error || "Loading..."}</h1>
    </div>
    <br />
    <WebcamCapture/>
    </>
  );
}

export default App;
