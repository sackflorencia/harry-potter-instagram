import AppLogo from "./AppLogo";
import NavigationItem from "./NavigationItem";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa"; 
import "./Sidebar.css";
//Clases agregadas con IA

const Sidebar = () =>{
    return (
        <nav className="sidebar-container">
            <AppLogo/>
            <div className="sidebar-nav-items">
                <NavigationItem icon={FaHouse} text="Feed" to="/feed"/>
                <NavigationItem icon={FaUser} text="Profile" to="/profile/me"/>
            </div>
        </nav>
    )
}
export default Sidebar;