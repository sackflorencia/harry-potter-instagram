import { useLocation } from "react-router-dom";
import PostCard from "../../components/PostCard";
import Sidebar from "../../components/Sidebar";

const PostPage = () => {
    const location = useLocation();
    const post = location.state?.post;
    if (!post) {
        return <p>Post not found</p>
    }
    return (
        <>
            <Sidebar/>
            <PostCard post={post} variant="detail" />
        </>
    )
}

export default PostPage