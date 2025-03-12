import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Comments() {

    const [comments, setComments] = useState([]);
    const navigate = useNavigate(); // uso navigate para volver atrás.

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/comments`)
            .then((response) => {
                // console.log(response.data)
                setComments(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    if (comments === null) { // cláusula de guardia
        return <h3>... buscando comentarios</h3>;
    }
    const volverAHome = () => {
        navigate('/'); // va atrás al pulsar con el botón. (página / home).
    };

    return (

        <div>
            <button
                style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '18px', padding: '10px 20px', backgroundColor: '#f2a90d' }}
                onClick={volverAHome}
            >
                Atrás
            </button>
            <h1>Listado de todos los comentarios filtrados por jefe</h1>

            {comments.map((eachComment) => {

                return (

                    <div key={eachComment.id}>

                        <h2>{`Jefe ID: ${eachComment.bossId}`}</h2>
                        <p>{eachComment.user}:{eachComment.comment}</p>
                        <p>Rating: {eachComment.rating} - Fecha: {eachComment.date}</p>

                    </div>
                );
            })}
        </div>
    );
}

export default Comments