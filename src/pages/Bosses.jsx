import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Bosses() {
    const navigate = useNavigate();
    const [bosses, setBosses] = useState([]);
    const [filterBoss, setFilterBoss] = useState("Dark Souls 1");

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_URL}/bosses?game=${filterBoss}`)
            .then((response) => {
                setBosses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [filterBoss]);

    const volverAtras = () => {
        navigate("/"); // Va atrás al pulsar con el botón (página / home).
    };
    console.log(filterBoss)
    return (
        <div style={{ padding: "50px", textAlign: "center", fontSize: "20px", fontWeight: "bold", }}>

            <h1>Listado de todos los jefes</h1>
            <p>Aquí tienes toda la información de todos los jefes de Dark Souls</p>
            <p>Busca los jefes por aparición del juego!</p>
            <p>Todos los jefes</p>

            <button style={{ backgroundColor: "#299039", color: "white", padding: "10px 10px", border: "none", cursor: "pointer" }}
                onClick={() => setFilterBoss("Dark Souls 1")}>Dark Souls 1</button>

            <button style={{ backgroundColor: "#25348a", color: "white", padding: "10px 10px", border: "none", cursor: "pointer" }}
                onClick={() => setFilterBoss("Dark Souls 2")} >Dark Souls 2</button>

            <button style={{ backgroundColor: "#731b2c", color: "white", padding: "10px 10px", border: "none", cursor: "pointer" }}
                onClick={() => setFilterBoss("Dark Souls 3")}
            >Dark Souls 3</button>

            <button style={{ position: "absolute", top: "20px", left: "20px", fontSize: "18px", padding: "10px 20px", backgroundColor: "#f2a90d", }} onClick={volverAtras}
            >Atrás</button>

            <div style={{ marginTop: "30px" }}>

                {bosses.map((boss) => (
                    <div key={boss.id} style={{ padding: "15px", margin: "10px auto", width: "50%" }}>

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