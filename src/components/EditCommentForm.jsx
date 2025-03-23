import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditCommentForm() {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [bossId, setBossId] = useState("");
    const [user, setUser] = useState("");
    const { commentId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`)
            .then((response) => {
                setComment(response.data.comment);
                setRating(response.data.rating);
                setBossId(response.data.bossId);
                setUser(response.data.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleEditSubmit = (event) => {
        event.preventDefault();

        axios
            .put(`${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`, {
                comment,
                rating,
                bossId,
                user,
            })
            .then((response) => {
                navigate(`/boss/${response.data.bossId}`);
                // Se actualiza el comentario y el estado
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h3>Edita tu comentario</h3>
            <form onSubmit={handleEditSubmit}>

                <h4>Comentario:</h4>
                <input value={comment} onChange={(event) => setComment(event.target.value)} />
                <h4>Rating:</h4>
                <input type="number" value={rating} min="1" max="10" onChange={(event) => setRating(event.target.value)} />
                <button type="submit" style={{ backgroundColor: "#0373b8", color: "white", padding: "5px 10px", border: "none", cursor: "pointer", }}
                >Editar</button>

            </form>
        </div>
    );
}

export default EditCommentForm;