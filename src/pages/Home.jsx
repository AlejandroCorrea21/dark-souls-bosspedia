import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ padding: '100px', textAlign: 'center', }}>
            <h1 style={{ color: "red" }}>Dark Souls Bosspedia</h1>
            <p>Bienvenido a la enciclopedia de los jefes de Dark Souls. Aprende de todos los jefes de la saga Dark Souls y comparte tu experiencia.</p>
            <Link to="/about">
                <button style={{ fontSize: '16px', padding: '10px 20px', marginTop: '20px' }}>About</button>
            </Link>
            <Link to="/bosses">
                <button style={{ fontSize: '16px', padding: '10px 20px', marginTop: '20px' }}>Ver todos los jefes</button>
            </Link>

            <div style={{ marginTop: '40px' }}>
                <h2>Busca por juego</h2>
                <div>
                    <div>
                        <h3 style={{ fontStyle: 'italic' }}>Dark Souls</h3>
                        <p>Conoce todos los jefes del mítico Dark Souls.</p>
                    </div>
                    <div>
                        <h3 style={{ fontStyle: 'italic' }}>Dark Souls 2</h3>
                        <p>El juego con más jefes, conoce bien a detalle todos los jefes de Dark Souls 2.</p>
                    </div>
                    <div>
                        <h3 style={{ fontStyle: 'italic' }}>Dark Souls 3</h3>
                        <p>Averigua aquí sobre todos los jefes del fin de esta trilogía, Dark Souls 3.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
