import {useEffect, useState} from "react";

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

export default CounterTemplate;