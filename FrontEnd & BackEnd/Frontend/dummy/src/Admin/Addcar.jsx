import axios from "axios";
import { useState } from "react";
import "../Style/Addcar.css"

const Addcar = () => {

    let [carname, setcarname] = useState("")
    let [company, setcompany] = useState("")
    let [model, setmodel] = useState("")
    let [number, setnumber] = useState("")
    let [rentprice, setrentprice] = useState("")
    let [imageurl, setimageurl] = useState("")

    let cardata = { carname, company, model, number, rentprice, imageurl }
    let admin = JSON.parse(localStorage.getItem("Admin"))
    console.log(admin);
    let addCar = (e) => {
        e.preventDefault()
        if (carname !== "" && company !== "" && model !== "" && number !== "" && rentprice !== "") {
            axios.post(`http://localhost:1211/cars/${admin.id}`, cardata)
                .then((res) => {
                    console.log(res);
                    alert("car added")
                })
                .catch((err) => {
                    console.log(err);
                    alert("Invalid Crendentials/ Car Number taken")
                })
        } else {
            alert("Fill the Crendentials")
        }

    }

    return (
        <div className="addcar">
            <form action="" onSubmit={addCar}>
                <h2><u>Add car</u></h2>
                <input type="text" onChange={(e) => { setcarname(e.target.value) }} value={carname} placeholder="Vehicle Name" /> <br />
                <input type="text" onChange={(e) => { setcompany(e.target.value) }} value={company} placeholder="company Name" /> <br />
                <input type="text" onChange={(e) => { setmodel(e.target.value) }} value={model} placeholder="model Name" /> <br />
                <input type="text" onChange={(e) => { setnumber(e.target.value) }} value={number} placeholder="Vehicle number" /> <br />
                <input type="text" src="" onChange={(e) => { setimageurl(e.target.value) }} value={imageurl} placeholder="Image URL" /> <br />
                <input type="number" onChange={(e) => { setrentprice(e.target.value) }} value={rentprice} placeholder="set rent price / Day (in numerics)" /> <br />
                <button>Add car</button>
            </form>
        </div>
    );
}

export default Addcar;