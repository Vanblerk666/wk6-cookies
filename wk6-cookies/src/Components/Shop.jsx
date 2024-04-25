// import "index.css from index.css"
import "./index.css";

// array for more buttons

function App() {
  const upgrades = ["Upgrade Button 1", "Upgrade Button 2"];

  return (
    <ul>
      {upgrades.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

//
