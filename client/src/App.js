import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [message, setMessage] = useState("");
  const [datatoSend, setDataToSend] = useState("");

  useEffect(() => {
    fetch("demo")
      .then((res) => res.json(res))
      .then((res) => setMessage(res.message));
  }, []);

  const sendData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: datatoSend }),
    };

    fetch("savedata", requestOptions)
      .then((response) => response.json())
      .then((res) => setMessage(res.message));
  };
  return (
    <div className="App">
      <h1>{message ? message : "No se ha hecho la conexión con el backend"}</h1>

      <input type="text" onChange={(e) => setDataToSend(e.target.value)} />
      <button onClick={() => sendData()}>Enviar al backend</button>
    </div>
  );
};

export default App;
