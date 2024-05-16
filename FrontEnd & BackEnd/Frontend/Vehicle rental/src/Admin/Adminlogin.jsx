import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Style/Adminlogin.css"



const Adminlogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const loginAdmin = async (e) => {

        e.preventDefault();
        axios.post(`http://localhost:1211/admins/find-by-username-password?username=${username}&password=${password}`)
            .then((res) => {
                console.log(res.data.data);
                localStorage.setItem("Admin", JSON.stringify(res.data.data))
                navigate(`/adminhome/adminhome1`);
            })
            .catch((err) => {
                console.log(err.data);
                alert("Invalid Credentials")
            })

    };

    return (
        <div className="adminlogin">
            <form onSubmit={loginAdmin}>
                <h1> <u>Login Credentials</u></h1>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Enter username"
                />
                <br />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password"
                />
                <br />
                <button type="submit">Login</button>
                    New User? <Link to="/adminregister">Register here</Link>

            </form>
        </div>
    );
};

export default Adminlogin;
