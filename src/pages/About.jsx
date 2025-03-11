import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {

    const navigate = useNavigate(); // uso navigate para volver atrás.

    const volverAtras = () => {
        navigate('/'); // va atrás al pulsar con el botón. (página / home).
    };

    return (
        <div>
            <h1>About</h1>
            <p>Info lo que sea</p>

            <button
                style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '18px', padding: '10px 20px', backgroundColor: '#f2a90d' }}
                onClick={volverAtras}
            >
                Atrás
            </button>
        </div>
    );
}

export default About;

