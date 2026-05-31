import type { Post } from "../../interfaces/Post";
import PostCard from "../PostCard";

//este codigo fue todo hecho por mi
const PostsList = ({ posts }: { posts: Post[] }) =>{
    return (
        <>
        {posts.map(post => (
            <PostCard key={post.id} post={post} isInPostPage={false}/>
        ))}
        </>
    )
}
export default PostsList;