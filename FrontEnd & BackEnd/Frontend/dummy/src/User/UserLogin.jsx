import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Userlogin.css"

const Userlogin = () => {

    let [phno, setphno] = useState()
    let [password, setpassword] = useState("")

    let navigate = useNavigate()
    let loginuser = async (e) => {
        e.preventDefault()
        axios.post(`http://localhost:1211/users/findbyphnopassword?phno=${phno}&password=${password}`)
            .then((res) => {
                console.log(res.data.data);
                localStorage.setItem("User", JSON.stringify(res.data.data))
                navigate(`/userhome`)
            })
            .catch((err) => {
                console.log(err);
                alert("Invalid Crendentials")
            })
    }
    return (
        <div className="userlogin">
            <form onSubmit={loginuser}>
                <h1> <u>Login Credentials</u></h1>
                <input
                    type="text"
                    onChange={(e) => setphno(e.target.value)}
                    value={phno}
                    placeholder="Enter phone"
                />
                <br />
                <input
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password"
                />
                <br />
                <button type="submit">Login</button>
                New User? <Link to="/register">Register here</Link>
            </form>
        </div >
    );
}

export default Userlogin;