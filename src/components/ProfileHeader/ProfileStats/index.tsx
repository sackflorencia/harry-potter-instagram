import StatItem from "./StatItem";

const ProfileStats = ({followers, following, posts}: { followers: number; following: number; posts: number }) => {
    return (
        <>
            <StatItem label="Followers" value={followers} />
            <StatItem label="Following" value={following} />
            <StatItem label="Posts" value={posts} />
        </>
    )
}
export default ProfileStats;