import './PostImage.css';
//tomando de base postHeader, github copilot me hizo el postImage
const PostImage = ({image}: { image: string }) =>{
    return (
        <div className="post-image-container">
            <img src={image} alt="Post" className="post-image" />
        </div>
    )
}
export default PostImage;