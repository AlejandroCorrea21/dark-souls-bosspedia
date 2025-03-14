import React, { useState } from 'react';
import axios from 'axios';

// Crear comentario

function BossCommentForm({ bossId, setComments }) {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);
    const [user, setUser] = useState('');

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handleRatingChange(event) {
        setRating(event.target.value);
    }

    function handleUserChange(event) {
        setUser(event.target.value);
    }

    // Botón de enviar
    function handleSubmit(event) {
        event.preventDefault(); // Eliminamos el comportamiento predeterminado de el formulario

        //1. Necesitamos recopilar la data a crear
        const newComment = {
            comment: comment,
            user: user,
            rating: rating,
            bossId: bossId,
            date: new Date(comment.date).toLocaleDateString(), // <- preguntar a jorge por la fecha y por la ID
        };
        // console.log(newComment)

        axios
            .post(`${import.meta.env.VITE_SERVER_URL}/comments`, newComment)
            .then(() => {
                setComment('');
                setRating(1);
                setUser('');
                setComments((commentsAntiguos) => [newComment, ...commentsAntiguos]); // que es lo que está pasando, y como gestionarlo.
            })
            .catch((error) => {
                console.log(error);
            });

    };


    return (
        <div>
            <h3>Agregar Comentario</h3>
            <form onSubmit={handleSubmit}>

                <div>
                    <h4>Comentario:</h4>
                    <input value={comment} onChange={handleCommentChange} required />
                </div>
                <div>
                    <h4>User:</h4>
                    <input value={user} onChange={handleUserChange} required />
                </div>
                <div>
                    <h4>Rating:</h4>
                    <input type="number" value={rating} min="1" max="10" onChange={handleRatingChange} required />
                </div>

                <button style={{ backgroundColor: '#7aae3d' }} type="submit">Agregar Comentario</button>
            </form>
        </div>
    );
}
export default BossCommentForm;