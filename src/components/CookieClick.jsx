import { useState } from "react";
import { useEffect } from "react";
// import BuyUpgrade from "./BuyUpgrade";

export default function CookieClick() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  const upgradeItems = [
    { cost: 10, cps: 1, item: "new mixer" },
    { cost: 100, cps: 10, item: "bigger oven" },
    { cost: 1000, cps: 100, item: "new baking tools" },
    { cost: 10000, cps: 1000, item: "cookie press" },
    { cost: 100000, cps: 10000, item: "cookie factory" },
  ];

  useEffect(() => {
    const myInterval = setInterval(() => {
      addCookie();
      // }, 1000);
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

  function buyUpgrade(cps, cost) {
    // setCookiesPerSecond(cookiesPerSecond);
    setCookiesPerSecond(cookiesPerSecond + cps);
    setCookies(cookies - cost);
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
      <div className="buyUpgrades">
        {upgradeItems.map((upgrade, index) => (
          <button
            key={index}
            onClick={() => buyUpgrade(upgrade.cps, upgrade.cost)}
            disabled={cookies < upgrade.cost}
          >
            {cookies < upgrade.cost
              ? `NOT AVAILABLE - you need ${upgrade.cost - cookies} cookies`
              : `Buy ${upgrade.item} for ${upgrade.cost}`}
          </button>
        ))}
      </div>
    </>
  );
}
