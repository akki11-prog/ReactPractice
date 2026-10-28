import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { CoreConcepts } from "./Content";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabContent from "./Examples";

function App() {
  const [content, setContent] = useState("");

  function handleClick(item) {
    setContent(item);
  }
  return (
    <>
      <h1>Welcome to React</h1>
      <section className="hero">
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcepts key={concept.title} {...concept} />
          ))}</ul>
      </section>
      <menu>
        <li>
          <button onClick={() => handleClick("components")}>Components</button>
          <button onClick={() => handleClick("jsx")}>JSX</button>
          <button onClick={() => handleClick("props")}>Props</button>
          <button onClick={() => handleClick("state")}>State</button>
        </li>
<section className="tab-content">
  {!content ? <p>Please select a topic to view the example.</p> : <TabContent {...EXAMPLES[content]} />}
</section>
      </menu>
    </>
  );
}

export default App;
