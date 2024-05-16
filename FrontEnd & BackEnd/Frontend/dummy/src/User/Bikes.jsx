import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Bikes.css"

const Bikes = () => {
    // let [carname, setcarname] = useState("")
    // let [company, setcompany] = useState("")
    // let [model, setmodel] = useState("")
    // let [rentprice, setrentprice] = useState("")

    let [data1, setdata1] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:1211/cars`)
            .then((res) => {
                // localStorage.setItem("Car", JSON.stringify(res.data.data))
                // console.log(res.data.data);
                setdata1(res.data.data)
                // console.log(setdata1);
                // console.log(data1);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    let navigate = useNavigate()
    let bookcar = (id) => {

        axios.get(`http://localhost:1211/bookedcars/isbooked/${id}`)
            .then((res) => {
                // console.log(res.data.data);
                alert("Already Booked")
            })
            .catch((err) => {
                navigate(`/userhome/book/${id}`)
            })

    }
    return (
        <div className="bikes">
            {data1.map((x) => {
                return (
                    <div className="details">
                        {/* <iframe src={x.imageurl} width="300px" height="150px" frameborder="0"></iframe> */}
                        {/* <iframe width="150" height="75" src={x.imageurl} title="YouTube video player"></iframe> */}
                        <img src={x.imageurl} width="300" height="150" alt="Image not Available" />
                        <span>
                            <h3>{x.carname}  </h3>
                            <h3>{x.company}</h3>
                            <h3>Rent/Day- {x.rentprice}</h3>
                            <h3>{x.bookingstatus}</h3>
                        </span>

                        <div className="btns">
                            <button id="booked" onClick={() => { bookcar(x.id) }}>Book</button>
                            <button>View Bike</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Bikes;