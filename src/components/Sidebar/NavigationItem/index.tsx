import { Link } from "react-router-dom";
import { type IconType } from "react-icons";
import "./NavigationItem.css";

//Este componente fue hecho con chatgpt
const NavigationItem = ({
    icon: Icon,
    text,
    to,
}: {
    icon: IconType;
    text: string;
    to: string;
}) => {
    return (
        <Link to={to} className="nav-item-link">
            <span className="nav-item-icon"><Icon /></span>
            <span className="nav-item-text">{text}</span>
        </Link>
    );
};

export default NavigationItem;