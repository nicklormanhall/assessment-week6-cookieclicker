import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CookieClick from "./components/CookieClick";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CookieClick></CookieClick>
    </>
  );
}

export default App;
