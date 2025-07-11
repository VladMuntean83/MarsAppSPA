import TitleImageTemplate from "./components/TitleImageTemplate.tsx";
import CounterTemplate from "./components/CounterTemplate.tsx";
import ComponentsTree from "./components/ComponentsTree.tsx";

function Nasa() {
    return (
        <>
            <TitleImageTemplate
                title="Welcome to NASA!"
                image="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                p1="You are at NASA"
                p2="Join us!"
            />

            <CounterTemplate/>
            <ComponentsTree/>
        </>
    )
}

export default Nasa;