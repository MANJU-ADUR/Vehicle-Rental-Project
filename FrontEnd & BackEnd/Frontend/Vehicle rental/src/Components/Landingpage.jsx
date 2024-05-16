import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Landing.css"

const Landingpage = () => {
    let [password, setpassword] = useState("")

    let navigatee = useNavigate()
    let proceed = (e) => {
        e.preventDefault()
        if (password === null) {
            alert("Enter Password")
        }
        if (password === "1211") {
            alert("Run Server")
            navigatee('/login')
        }
        else {
            alert("Wrong Password")
        }

    }

    return (
        <div className="land">
            <form action="" onSubmit={proceed}>
                {/* <img src="https://w7.pngwing.com/pngs/229/887/png-transparent-person-sitting-in-front-table-with-cycle-project-management-body-of-knowledge-project-management-professional-certified-associate-in-project-management-managers-miscellaneous-text-logo.png" alt="" /> <br /> */}
                <input type="password" onChange={(e) => { setpassword(e.target.value) }} value={password} placeholder="Enter password" />
            </form>

        </div>
    );
}

export default Landingpage;