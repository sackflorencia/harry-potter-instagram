import type { Post } from "../../interfaces/Post";

//Este codigo fue todo hecho por mi. tuve un error en que los parametros no se usaban
//y me marcaba en rojo, entonces temporalmente los puse en el return
const PostCard = ({ post, isInPostPage }: { post: Post; isInPostPage: boolean }) =>{
    return (
        <>
        {post.id}
        {isInPostPage ? " - Post Page" : " - Feed Page"}
        </>
    )
}
export default PostCard;