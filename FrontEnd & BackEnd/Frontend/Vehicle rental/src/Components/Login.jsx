import { Link } from "react-router-dom";
import "../Style/Login.css"
const Login = () => {
    return (
        <div className="body">
            <div className="login">
                <div className="main">
                    <Link to="/adminlogin" >
                        <div className="sub1">
                            {/* <img src="https://tse4.mm.bing.net/th?id=OIP.XKdZgJT9MaVBqYDg-5JlvgAAAA&pid=Api&P=0&h=180" alt="Not Availabe at the moment" /> */}
                            <h1>Admin</h1>
                        </div>
                    </Link>
                    <Link to="/userlogin"  >
                        <div className="sub2">
                            {/* <img src="https://tse4.mm.bing.net/th?id=OIP.t6338OygJjSsULRojIrCsAHaHa&pid=Api&P=0&h=180" alt="Not Availabe at the moment" /> */}
                            <h1>User</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;