import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Deletecar = () => {

    let [id, setid] = useState(null)
    let [force, setforce] = useState(0);


    useEffect(() => {
        axios.get(`http://localhost:8520/car/${id}`)
            .then((res) => {
                setforce(force + 1)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [force])

    let hii = false
    let navigate = useNavigate()
    let deletecar = (id) => {
        axios.delete(`http://localhost:8520/car/${id}`)
            .then((res) => {
                console.log(res);
                alert(`Deleted`)
                hii = true

            })
            .catch((err) => {
                console.log(err);
                if (hii == false) {
                    alert("Invalid car Number")
                    navigate(`/adminhome/viewcar`)
                }

            })
    }
    console.log(hii);
    return (
        <div className="deletecar">
            <h3>Delete</h3>
            <input type="text" onChange={(e) => { setid(e.target.value) }} value={id} placeholder="Enter car Number to Delete" /> <br /><br />
            <button onClick={deletecar(id)} >Delete</button>
        </div>
    );
}

export default Deletecar;