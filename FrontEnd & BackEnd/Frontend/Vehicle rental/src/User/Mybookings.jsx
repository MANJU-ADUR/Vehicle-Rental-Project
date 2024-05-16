import axios from "axios";
import { useEffect, useState } from "react";

const Mybookings = () => {
    let [data1, setdata1] = useState([])
    let [force, setforce] = useState(0);

    let userID = JSON.parse(localStorage.getItem("User"))
    let userid = userID.id

    useEffect(() => {
        axios.get(`http://localhost:1211/bookedcars/find-by-userid/${userid}`)
            .then((res) => {
                // console.log(res.object.data);
                // console.log(res.data.data);
                setdata1(res.data.data);
            })
            .catch((err) => {
                // console.log(err);
                alert("No Bookings Yet")
            })
    }, [force])

    // let deletecar = (id, carname) => {
    //     axios.delete(`http://localhost:1211/cars/${id}`)
    //         .then((res) => {
    //             console.log(res);
    //             setforce(force + 1)
    //             // alert(`${carname} Deleted`)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             alert("cannot Delete")
    //         })
    // }

    // let [note, setnote] = useState("")
    // if (data1.length === 0) {
    // setnote(`No Vehicles Addded Please Do Add vehicles`)
    // }

    return (
        <div className="bookings">
            <h1><u>Booked Vehicles</u></h1>
            {/* <h1>

            </h1>
            <table border="5">
                <tr>
                    <th>Booking ID</th>
                    <th>Vehivle ID</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>model </th>
                    <th>Numbery</th>
                    <th>Rent/Day</th>
                    <th>ImageUrl</th>
                </tr> */}

            {
                data1.map((x) => {
                    return (
                        <div className="details">
                            {/* <iframe src={x.imageurl} width="300px" height="150px" frameborder="0"></iframe> */}
                            {/* <iframe width="150" height="75" src={x.imageurl} title="YouTube video player"></iframe> */}
                            <img src={x.imageurl} width="300" height="150" alt="Image not Available" />
                            <span>
                                <h3>{x.carname}  </h3>
                                <h3>{x.company}</h3>
                                <h3>{x.rentprice}</h3>
                            </span>

                            {/* <button id="booked" onClick={() => { bookcar(x.id) }}>Book</button> */}
                        </div>
                    )
                })}
        </div>
    );
}

export default Mybookings;