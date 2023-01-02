import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Fooddetails = () => {

    let { id } = useParams();

    let [item, setItem] = useState(null)
    let [pending, setPending] = useState(true)   // for creating loader

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:4000/items/" + id)
                .then((response) => { return (response.json()); })
                .then((data) => {
                    setItem(data);
                    setPending(false)
                })
        }, 4000);
    }, [])

    return (
        <div>
            {pending && <div className="loader-div">
                <div className="loader">
                    <div className="loader-msg"></div>
                    <h3>Loading</h3>
                </div>
            </div>}
            {item && <div className="food-detail">
                <div><img src={item.pic} alt="food" /></div>
                <div className="about-food">
                    <h2>Food: {item.foodName}</h2>
                    <h3>Price: {item.Price}</h3>
                    <h3>Rating: {item.Rating}</h3>
                    <h3>Type: {item.type}</h3>
                    <p><h3>Description:</h3> {item.description}</p>
                </div>
            </div>}
        </div>
    );
}

export default Fooddetails;