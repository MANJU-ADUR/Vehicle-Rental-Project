import axios from "axios";
import { useState } from "react";
import "../Style/UserRegister.css"
const Userregister = () => {

    let [name, setname] = useState("")
    let [username, setusername] = useState("")
    let [email, setemail] = useState("")
    let [phno, setphno] = useState("")
    let [password, setpassword] = useState("")

    let userdata = { name, username, email, phno, password }
    let register = (e) => {
        e.preventDefault()
        if (name !== null && email !== null && password !== null && phno !== null && username !== null) {
            axios.post(`http://localhost:1211/users`, userdata)
                .then((res) => {
                    console.log(res);
                    alert("done")
                })
                .catch((err) => {
                    console.log(err);
                    alert("Invalid Crendentials")
                })
        }
        else {
            alert("Fill Crendentials")
        }
    }
    return (
        <div className="register">
            <form action="" onSubmit={register}>
                <h1><u>User Registration</u></h1>
                <label htmlFor="">Name:</label> <br />
                <input type="text" placeholder="Enter name" onChange={(e) => { setname(e.target.value) }} value={name} /> <br />
                <label htmlFor="">Username:</label> <br />
                <input type="text" placeholder="Enter username" onChange={(e) => { setusername(e.target.value) }} value={username} /> <br />
                <label htmlFor="">Email:</label> <br />
                <input type="email" placeholder="Enter Email" onChange={(e) => { setemail(e.target.value) }} value={email} /> <br />
                <label htmlFor="">Phone:</label> <br />
                <input type="tel" placeholder="Enter Phone Number" onChange={(e) => { setphno(e.target.value) }} value={phno} /> <br />
                <label htmlFor="">Password:</label> <br />
                <input type="password" placeholder="Enter Password" onChange={(e) => { setpassword(e.target.value) }} value={password} /> <br />
                <button>Register</button>
            </form>
        </div>
    );
}

export default Userregister;