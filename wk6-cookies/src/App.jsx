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
    }, 1000 / cps);

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
  // simple upgraede button
  function buyUpgrade() {
    setCps(cps + 1);
  }

  return (
    <div>
      <h1>Stress Reliever</h1>
      <div id="gove" onClick={addCookie}>
        Smack the b up!
      </div>

      <button onClick={buyUpgrade}>Click to smack him some more</button>
      <p>He's been slapped {cookies} times</p>
      <p>Currently taking {cps} slaps per second</p>
    </div>
  );
}
