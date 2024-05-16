import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Addcar from "./Addcar";
import Viewcar from "./Viewcar";
import Booked from "./Booked";
import Updatecar from "./Updatecar";
import Adminhome1 from "./Adminhome1";


const Adminhome = () => {

    return (
        <div className="adminhome">
            <Navbar />

            <Routes>
                <Route path="/addcar" element={<Addcar />} />
                <Route path="/viewcar" element={<Viewcar />} />
                <Route path="/updatecar/:id" element={<Updatecar />} />
                <Route path="/booked" element={<Booked />} />
                <Route path="/adminhome1" element={<Adminhome1 />} />
            </Routes>
        </div>
    );
}

export default Adminhome;