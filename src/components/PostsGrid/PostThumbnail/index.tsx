import { Link } from "react-router-dom";
import type { Post } from "../../../interfaces/Post";
import './PostTumbnail.css'

//chatgpt: me explico que tenia que pasar el state post a la postpage y lo agregue
const PostThumbnail = ({ post }: { post: Post }) => {
    return (
        <Link to={`/post/${post.id}`} state={{ post }} className="post-thumbnail-link">
            <img
                src={post.image}
                alt="Post thumbnail"
                className="post-thumbnail-img"
            />
        </Link>
    )
}
export default PostThumbnail;