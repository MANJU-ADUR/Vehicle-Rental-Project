import { Link } from "react-router-dom";
import "../Style/Adminnav.css"

const Navbar = () => {

    return (
        <div className="nav">

            <div className="logo">
                <h3>App Name</h3>
            </div>
            <div className="options">
                <Link to="/adminhome/adminhome1"><h3>Home</h3></Link>
                <Link to="/adminhome/addcar" ><h3>Add car</h3></Link>
                <Link to="/adminhome/viewcar" ><h3>My Vehicles</h3></Link>
                <Link to="/adminhome/booked"><h3>Booked cars</h3></Link>
                <Link to="/adminlogin"><h3>Log out</h3></Link>
            </div>

        </div>
    );
}

export default Navbar;