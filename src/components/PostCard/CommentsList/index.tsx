/* MODIFICADO CON IA */

import type { Comment } from "../../../interfaces/Comment";
import CommentItem from "./CommentItem";
import "./CommentsList.css";

const CommentsList = ({comments}: {comments: Comment[]}) => {
    return (
        <div className="comments-list-container">
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    )
}
export default CommentsList;