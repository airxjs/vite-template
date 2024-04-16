import { createSignal } from 'airx'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = createSignal(0)

  const handleClick = () => {
    count.value += 1
  }

  return () => (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + Airx</h1>
      <div class="card">
        <button onClick={handleClick}>
          count is {count.value}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
