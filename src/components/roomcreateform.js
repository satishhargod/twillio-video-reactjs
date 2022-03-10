import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
  error
}) => {
  return (
    <form className={"room-form"} onSubmit={handleSubmit}>
      <h2>Create a room</h2>
      <div className={"room-error"}> {error?error:""} </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required
        />
      </div>

      <div>
        <label htmlFor="room">Room name:</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required
        />
      </div>

      <button type="submit" disabled={connecting}>
        {connecting ? "Connecting" : "Submit"}
      </button>
      <a className={"text"} href={"/join-room"}>Join room</a>
    </form>
  );
};

export default Lobby;
