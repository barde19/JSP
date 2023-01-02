import food from '../food.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={food} alt="logo" /></Link>
                <h1>KFC Food</h1>
            </div>
            <div className='saerch-bar'>
            <input type="search"></input>
            <button>search</button>
            </div>
            <div className="navlinks">
                <Link to="/addfood">Add food</Link>
                <Link to="/orders">Orders</Link>
            </div>
        </nav>
    );
}

export default Navbar;