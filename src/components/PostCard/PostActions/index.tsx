import { useEffect, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./PostActions.css";

//el codigo fue hecho con ia pero le indicamos que utilizaa localStorage para
//guardar el estado de los likes y guardados
//tambien le agregue los iconos de react-icons para los botones buscando en las documentacion de react-icons
//https://react-icons.github.io/react-icons/icons/fa/
//https://react-icons.github.io/react-icons/icons/fi/

const PostActions = ({ postId, likes }: { postId: string, likes: number }) => {
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
        <div className="post-actions-container">
            <div className="post-actions-buttons">
                <div className="post-actions-left">
                    <button onClick={toggleLike} className="post-action-btn">
                        {liked ? <FaHeart className="liked" /> : <FaRegHeart />}
                    </button>

                    <button className="post-action-btn">
                        <FaRegComment />
                    </button>

                    <button className="post-action-btn">
                        <FiSend />
                    </button>
                </div>

                <button onClick={toggleSave} className="post-action-btn post-action-save">
                    {saved ? <FaBookmark /> : <FaRegBookmark />}
                </button>
            </div>

            {/* 
                CORRECCIÓN REALIZADA CON IA: 
                Se utiliza la propiedad 'likes' recibida por props dentro del JSX. 
                Esto soluciona el error ts(6133) 'likes is declared but its value is never read'.
                Además, se suma la lógica del estado 'liked' para mostrar el contador real en tiempo real.
            */}
            <div className="post-likes-count">
                <strong>{likes + (liked ? 1 : 0)} likes</strong>
            </div>
        </div>
    );
};

export default PostActions;