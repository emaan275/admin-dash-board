import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Sidebar from "./components/sidebar/Sidebar";
import { NewUser } from "./pages/newUser/NewUser";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import Users from "./pages/userList/Users";

function App() {
  return (
    <>
     
      <div className="Container">
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
