import { Link } from "react-router-dom";

const PostHeader = ({ username, profileId }: { username: string, profileId: string }) => {
    return (
        <>
            <Link to={`/profile/${profileId}`}>
                <p>{username}</p>
            </Link>
        </>
    )
}
export default PostHeader;