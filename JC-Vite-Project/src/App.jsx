import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./inputstyle.css/"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-48  w-48 p-4 hover:drop-shadow-2xl duration-300 animate-bounce" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-48 w-48 p-4 hover:drop-shadow-2xl duration-300 animate-spin" alt="React logo" />
        </a>
      </div>
      <h1 className="text-center text-3xl">Vite + React + Tailwind?</h1>
      <div className="card p-4 text-center">
        <button onClick={() => setCount((count) => count + 1)} className="text-black font-bold py-2 px-4 rounded-md border-black">
          Click for free money (in dollars): {count}$
        </button>
        <p className="text-gray-600 text-center mt-2 ">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      <p className="text-gray-600 text-center mt-4">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-gray-600 text-center mt-4 underline">
       By the way, I'm Juan Carlos C. Valdevieso
      </p>
      </div>
    </>
  )
}

export default App
