import { useState, useEffect, createContext, useContext } from 'react'
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
            <TitleImageTemplate
                title="Welcome to NASA!"
                image="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                p1="You are at NASA"
                p2="Join us!"
            />

            <CounterTemplate/>

            <Component1/>
        </>
    )
}

// @ts-ignore
export function TitleImageTemplate({ title, image, p1, p2 }) {

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
        </>
    )
}

function CounterTemplate() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Number(localStorage.getItem("count")))
    }, []);

    return (
        <>
            <button onClick={() => {
                localStorage.setItem("count", String(count + 1))
                setCount((count) => count + 1)
            }}>
                count is {count}
            </button>
            <button onClick={() => {
                localStorage.setItem("count", "0")
                setCount(0)
            }}>
                reset count
            </button>
        </>)
}

// Create a context for the counter hook
const counterContext = createContext(undefined);

// Propagate information to all children
const Counting:  React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        // @ts-ignore
        <counterContext.Provider value = {[ count, setCount ]}>
            { children }
        </counterContext.Provider>
    );
}

function Component1()  {

    return (
        <div>
            <Counting>
                <Component2 />
                <Component3 />
            </Counting>
        </div>
    );
}

// @ts-ignore
function Component2() {
    // @ts-ignore
    const [_, setCount] = useContext(counterContext);
    const increment = () => setCount((count: number) => count + 1);

    return <button onClick={increment}>increment me!</button>;
}

// @ts-ignore
function Component3() {
    // @ts-ignore
    return (
        <div>
            <Component4 />
            <p>counter is being updated</p>
        </div>
    );
}

// @ts-ignore
function Component4 () {
    // @ts-ignore
    const [count, _] = useContext(counterContext);
    return <div>count is {count}</div>;
}

export default App;
