import { useEffect, useState } from "react"
import Foodlist from "./Foodlist";

const Home = () => {
    let [items, setItems] = useState(null)
    let [pending, setPending] = useState(true)   // for creating loader

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:4000/items")
                .then((response) => { return (response.json()); })
                .then((data) => {
                    setItems(data);
                    setPending(false)
                })
        }, 4000);
    }, [])

    return (
        <div className="home">
            { pending && <div className="loader-div">
                <div className="loader">
                    <div className="loader-msg"></div>
                    <h3>Loading</h3>
                </div>
            </div>}
            {items && <Foodlist items={items} title="All Food" />}
        </div>
    );
}

export default Home;