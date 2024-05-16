import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/Booked.css"

const Booked = () => {

    let [cars, setcars] = useState([])

    let admin = JSON.parse(localStorage.getItem("Admin"))
    console.log(admin.id);
    useEffect(() => {
        axios.get(`http://localhost:1211/bookedcars/find-by-adminid/${admin.id}`)
            .then((res) => {
                console.log(res.data);
                setcars(res.data.data)
            })
            .catch((err) => {
                alert("NO Booings Yet")
            })
    }, [])
    return (
        <div className="booked">
            <h1><u>Vehicle Details</u></h1>
            <table border="5">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Model</th>
                    <th>Vehicle Number</th>
                    <th>Rent / Day</th>
                </tr>
                {cars.map((x) => {
                    return (
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.carname}</td>
                            <td>{x.company}</td>
                            <td>{x.model}</td>
                            <td>{x.number}</td>
                            <td>{x.rentprice}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Booked;