import { useEffect, useState } from "react";
import "./FollowButton.css";

const FollowButton = ({ profileId,
}: {
    profileId: string;
}) => {

    const [isFollowing, setIsFollowing] =
        useState(false);

    useEffect(() => {
        const savedValue =
            localStorage.getItem(
                `following-${profileId}`
            );

        setIsFollowing(savedValue === "true");
    }, [profileId]);

    const handleClick = () => {
        const newValue = !isFollowing;
        setIsFollowing(newValue);
        localStorage.setItem(
            `following-${profileId}`,
            String(newValue)
        );
    };

    return (
        <button
            className={`profile-follow-btn ${isFollowing ? "following" : "not-following"}`}
            onClick={handleClick}
        >
            {isFollowing ? "Following" : "Follow"}
        </button>
    );
};

export default FollowButton;