import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Viewcar.css"

const Viewcar = () => {

    let [data1, setdata1] = useState([])
    let [force, setforce] = useState(0);

    let admin = JSON.parse(localStorage.getItem("Admin"))
    // console.log(admin);

    useEffect(() => {
        axios.get(`http://localhost:1211/cars/find-by-adminid/${admin.id}`)
            .then((res) => {
                // console.log(res.object.data);
                console.log(res.data.data);
                setdata1(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [force])

    let navigate = useNavigate()
    let editcar = (id) => {
        navigate(`/adminhome/updatecar/${id}`)
    }

    let deletecar = (id, carname) => {
        axios.delete(`http://localhost:1211/cars/${id}`)
            .then((res) => {
                console.log(res);
                setforce(force + 1)
                // alert(`${carname} Deleted`)
            })
            .catch((err) => {
                console.log(err);
                alert("cannot Delete")
            })
    }

    // let [note, setnote] = useState("")
    // if (data1.length === 0) {
    // setnote(`No Vehicles Addded Please Do Add vehicles`)
    // }

    return (
        <div className="viewcar">
            <h1><u>Vehicle Details</u></h1>
            <h1>

            </h1>
            <table border="5">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Model</th>
                    <th>Vehicle Number</th>
                    <th>Rent / Day</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>

                {
                    data1.map((x) => {
                        return (
                            <tr>
                                {/* <iframe src={x.imageurl} width="300px" height="150px" frameborder="0"></iframe> */}
                                <td>{x.id}</td>
                                <td>{x.carname}</td>
                                <td>{x.company}</td>
                                <td>{x.model}</td>
                                <td>{x.number}</td>
                                <td>{x.rentprice}</td>
                                <td> <button onClick={() => { editcar(x.id) }} >Edit</button></td>
                                <td><button onClick={() => { deletecar(x.id, x.carname) }}>Delete</button></td>
                            </tr>
                        )
                    })}
            </table>
        </div>
    );
}

export default Viewcar;