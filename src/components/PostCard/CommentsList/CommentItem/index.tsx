import { Link } from "react-router-dom";
import type { Comment } from "../../../../interfaces/Comment";
import "./CommentItem.css"; 

/*MODIFICADO CON IA*/

const CommentItem = ({ comment }: { comment: Comment }) => {
    return (
        <div className="comment-item-container">
            <Link to={`/profile/${comment.profileId}`} className="comment-item-user">
                <strong>{comment.username}</strong>
            </Link>
            <span className="comment-item-text">{comment.text}</span>
        </div>
    )
}
export default CommentItem;