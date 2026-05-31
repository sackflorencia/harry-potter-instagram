import logo from "../../../assets/hogwarts-logo.png";

//el componente fue hecho con chat. el import estaba mal, por lo que lo corregi
const AppLogo = () => {
    return (
        <img
            src={logo}
            alt="Hogwarts Logo"
        />
    );
};

export default AppLogo;