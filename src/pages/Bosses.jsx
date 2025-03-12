import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Bosses() {
    const navigate = useNavigate(); // uso navigate para volver atrás.

    const volverAtras = () => {
        navigate('/'); // va atrás al pulsar con el botón. (página / home).

    };

    return (
        <div style={{
            padding: '200px', textAlign: 'center', fontSize: '20px', fontWeight: 'bold'
        }}>

            <h1>Listado de todos los jefes</h1>
            <p>Aquí tienes toda la información de todos los jefes de Dark Souls</p>

            <button
                style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '18px', padding: '10px 20px', backgroundColor: '#f2a90d' }}
                onClick={volverAtras}
            >
                Atrás
            </button>
            <button style={{ fontSize: '18px', padding: '10px 20px', marginTop: '20px', textAlign: 'center', backgroundColor: '#c30d0d ' }}>Buscar jefe</button>
        </div>
    );
}

export default Bosses;
