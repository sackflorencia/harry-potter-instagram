import logo from "../../../assets/hogwarts-logo.png";
import "./AppLogo.css";

//el componente fue hecho con chat. el import estaba mal, por lo que lo corregi
const AppLogo = () => {
  return (
    <div className="app-logo-container">
      <img src={logo} alt="Hogwarts Logo" className="app-logo-img" />
    </div>
  );
};

export default AppLogo;