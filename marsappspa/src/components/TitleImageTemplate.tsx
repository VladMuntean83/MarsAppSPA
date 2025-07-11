// @ts-ignore
function TitleImageTemplate({ title, image, p1, p2 }) {

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

export default TitleImageTemplate;