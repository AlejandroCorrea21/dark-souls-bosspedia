import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BossCommentForm from "../components/BossCommentForm";

function BossDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [boss, setBoss] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_URL}/bosses/${id}`)
            .then((response) => {
                setBoss(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        // 2 llámadas donde pido la información.
        axios
            .get(`${import.meta.env.VITE_SERVER_URL}/comments?bossId=${id}`)
            .then((response) => {
                setComments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleDelete = (commentId) => { // borrar
        axios
            .delete(`${import.meta.env.VITE_SERVER_URL}/comments/${commentId}`)
            .then(() => {
                setComments((commentsAntiguos) =>
                    commentsAntiguos.filter((comment) => comment.id !== commentId)
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const volverAtras = () => {
        navigate("/bosses");
    };

    return (
        <div style={{ padding: "50px", textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
            <h1>{boss.name}</h1>
            <p>Juego: {boss.game}</p>
            <p>Descripción: {boss.description}</p>
            <p>Localización: {boss.location}</p>

            <button
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    fontSize: "18px",
                    padding: "10px 20px",
                    backgroundColor: "#f2a90d",
                }}
                onClick={volverAtras}
            >
                Atrás
            </button>

            <div style={{ marginTop: "30px" }}>
                <h3>Comentarios</h3>
                {comments.length === 0 ? (
                    <p>No hay comentarios disponibles.</p>) : (

                    comments.map((comment) => (

                        <div key={comment.id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
                            <p>Usuario: {comment.user}</p>
                            <p>Comentario: {comment.comment}</p>
                            <p>Rating: {comment.rating}</p>
                            <p>Fecha: {new Date(comment.date).toLocaleDateString()}</p>

                            <button onClick={() => handleDelete(comment.id)} style={{ backgroundColor: "#b90707", color: "white", padding: "5px 10px", border: "none", cursor: "pointer", }}
                            >Eliminar</button>

                        </div>
                    ))
                )}
            </div>

            <BossCommentForm bossId={id} setComments={setComments} />
        </div>
    );
}

export default BossDetail;
