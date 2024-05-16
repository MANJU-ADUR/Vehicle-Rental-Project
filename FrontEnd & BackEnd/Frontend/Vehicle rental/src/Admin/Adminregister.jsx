import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Adminregister = () => {

    let [name, setname] = useState("")
    let [username, setusername] = useState("")
    let [email, setemail] = useState("")
    let [phno, setphno] = useState("")
    let [password, setpassword] = useState('')

    let admindata = { name, username, email, phno, password }

    let addadmin = (e) => {
        e.preventDefault()
        if (name !== "" && username !== "" && phno !== "" && email !== "" && password !== "") {
            axios.post("http://localhost:1211/admins", admindata)
                .then((res) => {
                    console.log(res);
                    alert("Admin added")
                })
                .catch((err) => {
                    console.log(err);
                    alert("Invalid Crendentials")
                })
        } else {
            alert("Fill the Crendentials")
        }
    }
    return (
        <div className="adminregister">
            <form action="" onSubmit={addadmin}>
                <h3>Reister Here</h3>
                <input type="text" onChange={(e) => { setname(e.target.value) }} value={name} placeholder="Name" /> <br />
                <input type="text" onChange={(e) => { setusername(e.target.value) }} value={username} placeholder="username" /> <br />
                <input type="email" onChange={(e) => { setemail(e.target.value) }} value={email} placeholder="Email" /> <br />
                <input type="tel" onChange={(e) => { setphno(e.target.value) }} value={phno} placeholder="Phone" pattern="[6789][0-9]{9}" /> <br />
                <input type="password" onChange={(e) => { setpassword(e.target.value) }} value={password} placeholder="password" /> <br />
                <button>Submit</button>
                <Link to="/adminlogin" ><button>Back to Login</button></Link>
            </form>
        </div>
    );
}

export default Adminregister;