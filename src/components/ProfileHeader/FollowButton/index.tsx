import { useEffect, useState } from "react";

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

        if (savedValue === "true") {
            setIsFollowing(true);
        }

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
        <button onClick={handleClick}>
            {isFollowing
                ? "Following"
                : "Follow"}
        </button>
    );
};

export default FollowButton;