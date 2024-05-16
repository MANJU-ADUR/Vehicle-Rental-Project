import { Route, Routes } from "react-router-dom";
import Usernav from "./Usernav";
import Bikes from "./Bikes";
import Book from "./Book";
import Account from "./Account";
import Mybookings from "./Mybookings";

const Userhome = () => {
    return (
        <div className="userhome">
            <Usernav />
            <div className="back">
            </div>
            <Routes>
                <Route path="/bikes" element={<Bikes />} />
                <Route path="/book/:id" element={<Book />} />
                <Route path="/myaccount" element={<Account />} />
                <Route path="/bookings" element={<Mybookings />} />
            </Routes>
        </div>
    );
}

export default Userhome;