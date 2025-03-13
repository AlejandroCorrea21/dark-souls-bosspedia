import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Crear comentario

function BossCommentForm(props) {

    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handleRatingChange(event) {
        setRating(event.target.value);
    }

    // Botón de enviar
    function handleSubmit(event) {
        event.preventDefault(); // Eliminamos el comportamiento predeterminado de el formulario

        //1. Necesitamos recopilar la data a crear
        const newComment = {
            comment: comment,
            rating: rating,
            bossId: props.bossId,
            date: new Date(comment.date).toLocaleDateString(), // <- preguntar a jorge por la fecha y por la ID
        };
        // console.log(newComment)

        axios
            .post(`${import.meta.env.VITE_SERVER_URL}/comments`, {
                comment: comment,
                user: user,
                rating: rating
            })
            .then((response) => {

                setComment('')
                setRating(1);
            })
            .catch((error) => {
                console.log(error)
            })
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
                    <h4>Rating:</h4>
                    <input type="number" value={rating} min="1" max="5" onChange={handleRatingChange} required />
                </div>

                <button type="submit">Agregar Comentario</button>
            </form>
        </div>
    );
}
export default BossCommentForm;