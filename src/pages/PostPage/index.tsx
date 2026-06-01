import { useParams } from "react-router-dom";
const PostPage = () => {
    const { postId } = useParams();
    return (
        <>
            <h1>{postId}</h1>
        </>
    )
}

export default PostPage