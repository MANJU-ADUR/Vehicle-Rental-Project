import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Account = () => {

    let [name, setname] = useState("")
    let [username, setusername] = useState("")
    let [email, setemail] = useState("")
    let [phno, setphno] = useState("")
    let [password, setpassword] = useState("")




    let user = JSON.parse(localStorage.getItem("User"))
    let id = user.id
    // console.log(user);
    // console.log(user.id);

    useEffect(() => {
        axios.get(`http://localhost:1211/users/${id}`)
            .then((res) => {
                // console.log(res.data);
                // console.log(realpass);
                setemail(res.data.data.email)
                setname(res.data.data.name)
                setphno(res.data.data.phno)
                setusername(res.data.data.username)
                setpassword(res.data.data.password)
            })
            .catch((err) => {
                console.log(err);
                alert("cannot Fetch Account Details")
            })
    }, [])

    let [newpassword, setnewpassword] = useState("")
    let [oldpaswword, setoldpass] = useState("")
    // newpassword = "1234"
    // oldpaswword = "99932100"

    let flag = false
    if (password === oldpaswword) {
        password = newpassword
        flag = true
    }
    // console.log(password);
    // console.log(newpassword);
    // console.log(oldpaswword);
    // console.log(password);

    let update = { id, name, username, email, phno, password }
    let updatepass = () => {
        if (flag == true) {
            axios.put(`http://localhost:1211/users`, update)
                .then((res) => {
                    alert("updated")
                })
                .catch((err) => {
                    console.log(err);
                    alert("-------------------")
                })
        }
        else {
            alert("Wrong Password")
        }


    }
    return (
        <div className="acc">
            <h1><u>My Account Details</u></h1>
            <h3>Name: {name}</h3>
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phno}</h3>

            <h2>Update Password</h2>
            <input type="password" onChange={(e) => { setoldpass(e.target.value) }} value={oldpaswword} placeholder="Enter Your Old Password" /> <br />
            <input type="password" onChange={(e) => { setnewpassword(e.target.value) }} value={newpassword} placeholder="Enter New Password" /> <br />
            <button onClick={() => { updatepass() }} >Reset Password</button> <br />
            <Link to="/userlogin" ><button>Log out</button></Link>




        </div >
    );
}

export default Account;