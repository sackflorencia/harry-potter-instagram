import { Link } from "react-router-dom";
import { type IconType } from "react-icons";

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
        <Link to={to}>
            <Icon />
            <span> {text}</span>
        </Link>
    );
};

export default NavigationItem;