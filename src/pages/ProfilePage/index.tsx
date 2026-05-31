import { useParams } from "react-router-dom";
//ChatGPT me explico como obtener los parametros con react-routerdom
//yo lo adapte a cada page
const ProfilePage = () => {
    const { house } = useParams();

    return (
        <>
        <h1>{house}</h1>
        </>
    )
}

export default ProfilePage