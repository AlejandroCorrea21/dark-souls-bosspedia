import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Bosses() {
    const navigate = useNavigate();
    const [bosses, setBosses] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_URL}/bosses`)
            .then((response) => {
                setBosses(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const volverAtras = () => {
        navigate("/"); // Va atrás al pulsar con el botón (página / home).
    };

    return (
        <div style={{ padding: "50px", textAlign: "center", fontSize: "20px", fontWeight: "bold", }}>

            <button style={{ fontSize: "18px", padding: "10px 20px", marginTop: "20px", backgroundColor: "#c30d0d", }}
            >Buscar jefe
            </button>

            <h1>Listado de todos los jefes</h1>
            <p>Aquí tienes toda la información de todos los jefes de Dark Souls</p>

            <button style={{ position: "absolute", top: "20px", left: "20px", fontSize: "18px", padding: "10px 20px", backgroundColor: "#f2a90d", }} onClick={volverAtras}
            >Atrás
            </button>

            <div style={{ marginTop: "30px" }}>

                {bosses.map((boss) => (
                    <div
                        key={boss.id}
                        style={{ padding: "15px", margin: "10px auto", width: "50%" }}
                    >
                        <h2>{boss.name}</h2>
                        <h3>{boss.game}</h3>

                        <Link to={`/boss/${boss.id}`}>
                            <button>Detalles</button>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bosses;
