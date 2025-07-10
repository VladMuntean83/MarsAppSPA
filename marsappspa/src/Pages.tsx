import {TitleImageTemplate} from "./Nasa";

export function HomePage() {
    return (
        <>
            <TitleImageTemplate
                title="Welcome to NASA!"
    image="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
    p1="This is our homepage"
    p2="Take a look around!"
    />

    <img
        className="welcome-image"
    src="https://static.vecteezy.com/system/resources/thumbnails/013/775/770/small_2x/3d-welcome-banner-free-png.png"
    alt="Logo"
    width="300"
        />
        </>
)
}

export function About() {

    const handleAccept = () => {
        window.location.href = 'https://www.friv.com/';
    };

    const handleReject = () => {
        window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1';
    }

    return (
        <>
            <TitleImageTemplate
                title="About NASA!"
    image="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
    p1="My name is NASA"
    p2="I am 12 years old and I live in Wisconsin"
        />

        <h2>Do you want to play with me?</h2>

        <button onClick={handleAccept}>Play with NASA</button>
    <button onClick={handleReject}>Don't play with NASA :(</button>

    </>
)
}