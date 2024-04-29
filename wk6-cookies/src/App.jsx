import { useState } from "react";
import { useEffect } from "react";

// Set variables on page load
export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);

  useEffect(() => {
    // maybe you want to do some maths here for the 1000/cps etc
    // a timer to be created when the page loads to increase cookies by cps every second
    const myInterval = setInterval(() => {
      addCookie();
    }, 10000 / cps);

    // Use every time UseEffect is used?
    // to clean up my timer when I rerun the useEffect to i don't end up with a billion timers
    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function addCookie() {
    // because this runs in a timer, we need to be more explicit about the previous value of the state variable
    setCookies((currentCookies) => {
      return currentCookies + 1;
    });
  }
  // upgrade button
  function addToCps() {
    setCps(cps + 1);
  }

  // double cps upgrade
  function doubleCps() {
    setCps(cps * 2);
  }

  // cps x4 upgrade
  function quadCps() {
    setCps(cps * 4);
  }

  return (
    <div>
      <h1>The Ultimate Stress Reliever</h1>

      <div id="gove" onClick={addCookie}>
        <img id="image" src="/public/Gove.jpeg" />
      </div>
      <div id="txt"> Smack the b up!</div>

      <button className="buttons" onClick={addToCps}>
        Click to smack him some more. He&apos;s worth it.
      </button>
      <p>He&apos;s been slapped {cookies} times</p>
      <p>Currently only taking {cps} slaps per second</p>

      <div className="upgrades">
        <button className="buttons" onClick={doubleCps}>
          Buy a wet towel to bosh him more. He can&apos;t get any uglier.
        </button>
      </div>

      <div className="upgrades">
        <button className="buttons" onClick={quadCps}>
          Buy a sock full of oranges to really hurt the mutha
        </button>
      </div>
    </div>
  );
}
