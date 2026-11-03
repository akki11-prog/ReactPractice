import reactLogo from "../assets/react.svg";
import { Songs } from "../Data/Songs";
import { useState } from "react";
export default function Player({currentSong}) {
  return (
    <section id="center">
      <div className="hero">
        <img src={currentSong.image} className="base" width="170" height="179" alt="" />
      </div>
      <div>
        <h1>{currentSong.name}</h1>
        <p>{currentSong.artist}</p>
      </div>
      
        <div>
        <audio controls>
          <source src={currentSong.audio} type="audio/mpeg" />
        </audio>
        </div>
        <div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Play
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Next
        </button>
        </div>
      
    </section>
  );
}
