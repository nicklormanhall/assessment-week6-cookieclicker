import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import CookieClick from "./components/CookieClick";

function App() {
  const [count, setCount] = useState(0);

  function IncreaseCookies() {
    setCount(count + 1);
  }

  return (
    <>
      <h1> You have {count} cookies</h1>
      <div className="cookieBtn">
        <img src="/Cookie.png" alt="Image" onClick={IncreaseCookies} />
      </div>
      <CookieClick count={count} />
    </>
  );
}

export default App;
