import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Use Effect Called");

    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, 15000);

    return () => {
      console.log("Unmounting");
      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Counter value is {counter}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
