import { Link } from "react-router-dom";
import "../Style/Usernav.css"

const Usernav = () => {
    return (
        <div className="navbar">
            <div className="nav1">
                <div className="title"><h3>Aapp name</h3></div>
                <nav>
                    <Link to=""><h3>Home</h3></Link>
                    <Link to="/userhome/bikes"><h3>Bikes</h3></Link>
                    <Link to=""><h3>About us</h3></Link>
                    <Link to=""><h3>Contact</h3></Link>
                    <Link to="/userhome/bookings"><h3>My Bookings</h3></Link>
                    <Link to="/userhome/myaccount"><h3>My Account</h3></Link>

                </nav>
            </div>
            {/* <div className="back">

            </div> */}
        </div>
    );
}

export default Usernav;