import { useParams } from "react-router-dom";


function BossDetail() {

    const parametrosDinamicos = useParams();
    //console.log(parametrosDinamicos.recipeId);

    const foundBoss = props.bosses.find((boss) => { // El find busca en props.bosses que la ID del jefe coinsidica con la que consigue en la URL a travez de paramétros dinamicos. Si la encuentra la muestra, si no devuelve undefined.

        if (boss.id === parametrosDinamicos.id) {
            return true;
        } else {
            return false;
        }
    });

    if (foundBoss === null) { // cláusula de guardia
        return <p>No se encontró al jefe..</p>;
    }

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h2>{foundBoss.name}</h2>
            <p>{foundBoss.description}</p>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <div style={{ flex: 1, textAlign: "left" }}>
                    <p>Health: {foundBoss.health}</p>
                    <p>Attack: {foundBoss.attack}</p>
                    <p>Defense: {foundBoss.defense}</p>
                    <p>Weakness: {foundBoss.weakness}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <img
                        alt={foundBoss.name}
                        style={{ width: "250px", height: "250px", borderRadius: "10px" }}
                    />
                </div>
            </div>

            <h3>Comments:</h3>

            {foundBoss.comments.map((comment, index) => (
                <div key={index}>
                    <p>Rating: {comment.rating || "No rating available"}</p>
                    <p>Comment: {comment.comment || "No comment available"}</p>
                    <p>Date: {new Date(comment.date).toLocaleDateString() || "No date available"}</p>
                    <p>User: {comment.user || "No nickname available"}</p>
                </div>
            ))}

        </div>
    );
}

export default BossDetail;