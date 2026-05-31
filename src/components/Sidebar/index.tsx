import AppLogo from "./AppLogo";
import NavigationItem from "./NavigationItem";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa"; //los iconos fueron seleccionados con chatgpt 

const Sidebar = () =>{
    return (
        <>
            <AppLogo/>
            <NavigationItem icon={FaHouse} text="Feed" to="/feed"/>
            <NavigationItem icon={FaUser} text="Profile" to="/profile/me"/>
        </>
    )
}
export default Sidebar;