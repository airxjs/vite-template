import { Signal } from "signal-polyfill";

import viteLogo from "/vite.svg";
import "./style.css";

const count = new Signal.State(0);

function App() {
  const handleClick = () => {
    count.set(count.get() + 1);
  };

  return () => (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + Airx + Signal</h1>
      <div class="card">
        <button onClick={handleClick}>count is {count.get()}</button>
      </div>
    </>
  );
}

export default App;
