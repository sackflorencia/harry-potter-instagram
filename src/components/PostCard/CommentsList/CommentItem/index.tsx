import { Link } from "react-router-dom";
import type { Comment } from "../../../../interfaces/Comment";

const CommentItem = ({ comment }: { comment: Comment }) => {
    return (
        <>
            <Link to={`/profile/${comment.profileId}`}>
                <strong>{comment.username}</strong>
            </Link>
            <p>{comment.text}</p>
        </>
    )
}
export default CommentItem;