import { useState, useEffect } from "react";
import "./style.scss";

function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setId(data.slip.id);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <main>
      <p className="advice-no">Advice #{id}</p>
      <h1 className="advice">"{advice}"</h1>
      <img src="images/pattern-divider-desktop.svg" className="divider"></img>
      <button onClick={getAdvice}>
        <img src="images/icon-dice.svg" alt="" />
      </button>
    </main>
  );
}

export default App;
