import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landingpage from "./Components/Landingpage";
import Login from "./Components/Login";
import Adminlogin from "./Admin/Adminlogin";
import Adminregister from "./Admin/Adminregister";
import Adminhome from "./Admin/Adminhome";
import Userlogin from "./User/UserLogin";
import Userhome from "./User/Userhome";
import Userregister from "./User/Userregister";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/adminregister" element={<Adminregister />} />
          <Route path="/adminhome/*" element={<Adminhome />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/userhome/*" element={<Userhome />} />
          <Route path="/register" element={<Userregister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
