import StatItem from "./StatItem";
import './ProfileStats.css'

const ProfileStats = ({ followers, following, posts }: { followers: number; following: number; posts: number }) => {
    return (
        <ul className="profile-stats-list">
            <StatItem label=" posts" value={posts} />
            <StatItem label=" followers" value={followers} />
            <StatItem label=" following" value={following} />
        </ul>
    )
}
export default ProfileStats;