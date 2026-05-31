import './PostImage.css';
//tomando de base postHeader, github copilot me hizo el postImage
const PostImage = ({image}: { image: string }) =>{
    return (
        <>
            <img src={image} alt="Post" />
        </>
    )
}
export default PostImage;