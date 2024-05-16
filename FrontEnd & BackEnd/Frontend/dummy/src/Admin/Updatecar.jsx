import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import Login from "../Components/Login"
const Updatecar = () => {
    let [carname, setcarname] = useState("")
    let [model, setmodel] = useState("")
    let [number, setnumber] = useState("")
    let [rentprice, setrentprice] = useState("")
    let [company, setcompany] = useState("")
    let [id, setid] = useState("")
    let [imageurl, setimageurl] = useState("")
    let param = useParams();
    // console.log(param.id);
    useEffect(() => {
        axios.get(`http://localhost:1211/cars/${param.id}`)
            .then((res) => {
                // console.log(res.data.data);
                setcarname(res.data.data.carname)
                setmodel(res.data.data.model)
                setnumber(res.data.data.number)
                setcompany(res.data.data.company)
                setrentprice(res.data.data.rentprice)
                setid(res.data.data.id)
                setimageurl(res.data.data.imageurl)

            })
            .catch((err) => {
                // console.log(err);
                alert("unable to Update BCZ of some Reason")
            })

    }, [])
    // console.log(imageurl);

    let data = { carname, company, model, number, rentprice, id, imageurl }
    let submitedit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:1211/cars`, data)
            .then((res) => {
                // console.log(res);
                alert("Data Edited successfully")
            })
            .catch((err) => {
                // console.log(err);
                alert("Invalid Data format")
            })
    }
    return (
        <div className="edit">
            <form onSubmit={submitedit} action="">
                <h1>update car</h1>
                <h3>ID: {id}</h3>
                <input type="text" onChange={(e) => { setcarname(e.target.value) }} value={carname} placeholder="car Name" /> <br />
                <input type="text" onChange={(e) => { setcompany(e.target.value) }} value={company} placeholder="company Name" /> <br />
                <input type="text" onChange={(e) => { setmodel(e.target.value) }} value={model} placeholder="model Name" /> <br />
                <input type="text" onChange={(e) => { setnumber(e.target.value) }} value={number} placeholder="car number" /> <br />
                <input type="text" onChange={(e) => { setrentprice(e.target.value) }} value={rentprice} placeholder="set rent price" /> <br />
                <button>update</button>
                <Link to="/adminhome/viewcar" ><button>back</button></Link>
            </form>
        </div>
    );
}
export default Updatecar;