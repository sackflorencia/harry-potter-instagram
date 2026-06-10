const StatItem = ({ label, value }: { label: string; value: number }) => {
    return (
        <li className="profile-stat-item">
            <strong>{value}</strong>
            <span>{label}</span>
        </li>
    )
}
export default StatItem;