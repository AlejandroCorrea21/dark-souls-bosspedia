import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div style={{
            padding: '200px', textAlign: 'center', fontSize: '20px', fontWeight: 'bold'
        }}>
            <h1>Dark Souls Bosspedia</h1>
            <p>Bienvenido a la enciclopedia de los jefes de Dark Souls. Aprende de todos los jefes de la saga Dark Souls y comparte tu experiencia! :) .</p>
            <Link to="/about">
                <button style={{ position: 'absolute', top: '20px', left: '5%', fontSize: '18px', padding: '10px 20px', marginTop: '20px', backgroundColor: '#f2a90d' }}>About</button>
            </Link>
            <Link to="/bosses">
                <button style={{ fontSize: '18px', padding: '10px 20px', marginTop: '20px', textAlign: 'center', marginLeft: '30px', marginRight: '30px', backgroundColor: '#c30d0d' }}>Ver todos los jefes</button>
            </Link>
            <Link to="/comments">
                <button style={{ fontSize: '18px', padding: '10px 20px', marginTop: '20px', textAlign: 'center', marginLeft: '30px', marginRight: '30px', backgroundColor: '#7aae3d' }}>Ver todos los comentarios</button>
            </Link>

            <div>
                <h2 style={{ marginTop: '40px' }}>Algunos jefes de la saga</h2>
                <div>
                    <div>
                        <h3 style={{ fontStyle: 'italic', marginTop: '40px' }}>Dark Souls</h3>
                        <p>Conoce todos los jefes del mítico Dark Souls.</p>
                    </div>
                    <div>
                        <h3 style={{ fontStyle: 'italic', marginTop: '25px' }}>Dark Souls 2</h3>
                        <p>El juego con más jefes, conoce bien a detalle todos los jefes de Dark Souls 2.</p>
                    </div>
                    <div>
                        <h3 style={{ fontStyle: 'italic', marginTop: '25px' }}>Dark Souls 3</h3>
                        <p>Averigua aquí sobre todos los jefes del fin de esta trilogía, Dark Souls 3.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
