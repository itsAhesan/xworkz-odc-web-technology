import { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="content">
        <Counter />
        <Todo />
      </div>
    </div>
  );
}

export default App;
