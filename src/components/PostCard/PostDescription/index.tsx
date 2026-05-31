//tomando de base postImage, github copilot me hizo el postDescription
//pero me lo hizo sin el username. lo agregamos nosotros
const PostDescription = ({description, username}: { description: string, username: string }) =>{
    return (
        <>
        <p><strong>{username}</strong> {description}</p>
        </>
    )
}
export default PostDescription;