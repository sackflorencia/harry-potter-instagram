const StatItem = ({ label, value }: { label: string; value: number }) => {
    return (
        <>
            <strong>{value}</strong>
            <span>{label}</span>
        </>
    )
}
export default StatItem;