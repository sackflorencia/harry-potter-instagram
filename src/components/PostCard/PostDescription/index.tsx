import { Link } from "react-router-dom";

//tomando de base postImage, github copilot me hizo el postDescription
//pero me lo hizo sin el username. lo agregamos nosotros. el link tmb lo agregamos
const PostDescription = ({description, username, profileId}: { description: string, username: string, profileId: string }) =>{
    return (
        <>
        <Link to={`/profile/${profileId}`}>
            <strong>{username}</strong> 
        </Link>
        <p>{description}</p>
        </>
    )
}
export default PostDescription;