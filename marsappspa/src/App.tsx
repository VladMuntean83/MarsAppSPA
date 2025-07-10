import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export function Nasa() {
    return (
        <>
            <title>Welcome to Nasa!</title>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                alt="NASA Logo"
                width="200"
            />
            <p>Welcome to Nasa!</p>
            <p>You are here</p>
        </>
    )
}

// @ts-ignore
export function TitleImageTemplate({ title, image, p1, p2 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Number(localStorage.getItem("count")))
    }, []);

    return (
        <>
            <h1>{title}</h1>
            <img
                src={image}
                alt="Logo"
                width="200"
            />
            <p>{p1}</p>
            <p>{p2}</p>

            <button onClick={() => {
                localStorage.setItem("count", String(count + 1));
                setCount((count) => count + 1);
                }
            }>
                count is {count}
            </button>

            <button onClick={() => {
                localStorage.setItem("count", "0");
                setCount(0);
            }
            }>
                reset count
            </button>
        </>
    )
}


export default App;
