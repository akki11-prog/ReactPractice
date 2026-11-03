import { useState } from "react";
import "./App.css";
import {Songs} from "./Data/Songs";
import Player from "./components/Player";



export default function App() {
  const [activeSong, setActiveSong] = useState(null);

  return (
    <>
    <div className="header-container">
      <button className="header-button">Header Button</button>
      <button>Add Songs</button>
    </div>
    <div className="main-container">
      <div className="sidebar">
        <h1>Songs</h1>
        <ul>
          {Songs.map((song) => (
            <li
              key={song.id}
              className={activeSong === song.id ? "active" : ""}
              onClick={() => setActiveSong(song.id)}
            >
              <button>
                {song.name} - {song.artist}
              </button>
            </li>
          ))}
        </ul>

      </div>
      <div className="content">
        <div>
        {activeSong ? 
      (
        <Player currentSong={Songs.find((song) => song.id === activeSong)} />
      ) : (
        <p>Please select a song to play.</p>
      )}  
      </div>
      </div>
      </div>
    </>
  );
}
