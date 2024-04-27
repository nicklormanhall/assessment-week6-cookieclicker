import { useState } from "react";
import { useEffect } from "react";

export default function CookieClick() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      addCookie();
    }, 1000 / cookiesPerSecond);

    return () => {
      clearInterval(myInterval);
    };
  }, [cookiesPerSecond]);

  function addCookie() {
    setCookies((currentCookies) => {
      return currentCookies + 1;
    });
  }

  function buyUpgrade() {
    setCookiesPerSecond(cookiesPerSecond);
    // setCookiesPerSecond(cookiesPerSecond + 1);
  }

  return (
    <>
      <h1>
        {" "}
        Mmmmmmmmm You have {cookies} cookies, you have {cookiesPerSecond} new
        cookie every second
      </h1>
      <div className="cookieBtn">
        <img src="/Cookie.png" alt="Image" onClick={addCookie} />
      </div>
    </>
  );
}
