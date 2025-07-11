import {useContext} from "react";
import counterContext, { Counting } from "../counterContext.tsx";

function ComponentsTree()  {

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

export default ComponentsTree;