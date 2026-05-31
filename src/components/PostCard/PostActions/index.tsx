import { useEffect, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

//el codigo fue hecho con ia pero le indicamos que utilizaa localStorage para
//guardar el estado de los likes y guardados
//tambien le agregue los iconos de react-icons para los botones buscando en las documentacion de react-icons
//https://react-icons.github.io/react-icons/icons/fa/
//https://react-icons.github.io/react-icons/icons/fi/

const PostActions = ({ postId }: { postId: string }) => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setLiked(
            localStorage.getItem(`liked-${postId}`) === "true"
        );

        setSaved(
            localStorage.getItem(`saved-${postId}`) === "true"
        );
    }, [postId]);

    const toggleLike = () => {
        const newValue = !liked;

        setLiked(newValue);

        localStorage.setItem(
            `liked-${postId}`,
            String(newValue)
        );
    };

    const toggleSave = () => {
        const newValue = !saved;

        setSaved(newValue);

        localStorage.setItem(
            `saved-${postId}`,
            String(newValue)
        );
    };

    return (
        <>
            <button onClick={toggleLike}>
                {liked ? <FaHeart /> : <FaRegHeart />}
            </button>

            <button>
                <FaRegComment />
            </button>

            <button>
                <FiSend />
            </button>

            <button onClick={toggleSave}>
                {saved ? <FaBookmark /> : <FaRegBookmark />}
            </button>
        </>
    );
};

export default PostActions;