import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/Book.css"
import Login from "../Components/Login";

const Book = () => {
    let Car = JSON.parse(localStorage.getItem("Car")) // dummy
    // console.log(Car);


    let userID = JSON.parse(localStorage.getItem("User"))
    // console.log(userID); // object

    let [user_id, setuserid] = useState("")
    let theid = (userID.id)


    let param = useParams()


    let [carname, setcarname] = useState("")
    let [company, setcompany] = useState("")
    let [model, setmodel] = useState("")
    let [number, setnumber] = useState("")
    let [rentprice, setrentprice] = useState()
    let [id, setid] = useState(0)
    let [imageurl, setimageurl] = useState("")

    // let car_id = id;


    user_id = theid;
    // console.log(user_id); //test
    let [status, setstatus] = useState("Book")
    let data1 = { carname, company, number, model, rentprice, id, imageurl, status }


    let [adminid, setadminid] = useState(0)

    let [days, setdays] = useState(0)
    let [finalprice, setfinalprice] = useState(0)
    let calculate = () => {
        if (days == null) {
            alert("Enter number of Days")
        }
        if (days > 0 && days <= 5) {
            setfinalprice((rentprice) * (days))
        }
        if (days > 5) {
            alert("cant Rent for more than 5 Days")
        }
        axios.get(`http://localhost:1211/cars/find-adminid-by-carid/${id}`)
            .then((res) => {
                // console.log(res.data.data);
                setadminid(res.data.data)
            })
            .catch((err) => {
                // console.log(err);
                alert("Cannot fetch Admin ID")
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:1211/cars/${param.id}`)
            .then((res) => {
                // console.log(res.data.data);

                setcarname(res.data.data.carname)
                setcompany(res.data.data.company)
                setmodel(res.data.data.model)
                setnumber(res.data.data.number)
                setid(res.data.data.id)
                setrentprice(res.data.data.rentprice)
                setimageurl(res.data.data.imageurl)
            })
    }, [])


    let bookthis = (id) => {
        if (finalprice > 0) {
            axios.post(`http://localhost:1211/bookedcars/${adminid}/${theid}`, data1)
                .then((res) => {
                    alert("Booked")
                    setstatus("Booked")
                })
                .catch((err) => {
                    alert("Already bookk")
                    // console.log(adminid);
                })
        }
        else {
            alert("calculate Total Rent")
        }
    }
    console.log(status);

    // axios.put(`http://localhost:1211/cars`, data1)
    //     .then((res) => {
    //         // console.log(res);
    //         alert("Data Edited successfully")
    //     })
    //     .catch((err) => {
    //         // console.log(err);
    //         alert("Invalid Data format")
    //     })
    let book = "book"
    return (
        <div className="book">

            <div className="booking">
                <div className="image">
                    <img src={imageurl} width="550" height="500" alt="Image not Available" />
                </div>

                <div className="details">
                    <h3>Car: {carname}</h3>
                    <h3>company: {company}</h3>
                    <h3>Model: {model}</h3>
                    <h3>number: {number}</h3>
                    <h3>Rent/Day : {rentprice}</h3>
                    <h3>Rent for the seleted Days: {finalprice} </h3>
                    {/* <h3>admin ID:{adminid}</h3> */}
                    <span>from <input id="ab" type="date" /> to <input id="cd" type="date" /> </span>
                    <input type="number" onChange={(e) => { setdays(e.target.value) }} value={days} placeholder="How many days" />
                    <button onClick={() => { calculate() }}>Calculate</button> <br />
                    <button onClick={() => { bookthis(id) }}>Book</button>
                </div>


            </div>
        </div>
    );
}

export default Book;