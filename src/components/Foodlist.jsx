import { Link } from "react-router-dom";

const Foodlist = ({ items, title }) => {
    return (
        <div>
            <h1> {title} </h1>
            <div className="food-list">
            {
                items.map((food) => {
                    return (
                        <div className="food" key={food.foodName}>
                                <Link to={`/fooddetails${food.id}`}>
                                <img src={food.pic} alt="food" />
                                <h2>{food.foodName} </h2>
                                <h3> Price: {food.Price}</h3>
                                </Link>
                        </div>
                    )

                })
            }
            </div>
        </div>
    );
}

export default Foodlist;