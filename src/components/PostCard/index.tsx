import type { Post } from "../../interfaces/Post";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";
import PostActions from "./PostActions";

interface PostCardProps {
  post: Post;
  variant: "feed" | "detail";
}

const PostCard = ({ post, variant }: PostCardProps) =>{
    return (
        <>
        {variant === "detail" ? " - Post Page" : " - Feed Page"}
        <PostHeader username={post.username} profileId={post.profileId} />
        <PostImage image={post.image} />
        <PostActions postId={post.id} likes={post.likes} />
        <PostDescription description={post.caption} username={post.username} profileId={post.profileId} />
        </>
    )
}
export default PostCard;