import type { Comment } from "../../../interfaces/Comment";
import CommentItem from "./CommentItem";

const CommentsList = ({comments}: {comments: Comment[]}) => {
    return (
        <>
        {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
        ))}
        </>
    )
}
export default CommentsList;