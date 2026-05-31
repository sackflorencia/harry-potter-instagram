import { Link } from "react-router-dom";

const PostThumbnail = ({ image, postId }: { image: string; postId: string }) => {
    return (
        <Link to={`/post/${postId}`}>
            <img
                src={image}
                alt="Post thumbnail"
            />
        </Link>
    )
}
export default PostThumbnail;