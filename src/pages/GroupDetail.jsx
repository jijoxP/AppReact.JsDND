import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getParty } from "../api";

function GroupDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [group, setGroup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGroupDetail() {
            setLoading(true);
            try {
                const data = await getParty(id);
                setGroup(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchGroupDetail();
    }, [id]);

    if (loading) return <p>Chargement du groupe...</p>;
    if (error) return <p>Erreur : {error}</p>;
    if (!group) return <p>Groupe introuvable.</p>;

    return (
        <div className="group-detail">
            <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>Retour</button>
            <h1>{group.name}</h1>
            
            <div className="group-info">
                <p><strong>Description :</strong> {group.description || "Aucune description"}</p>
                <p><strong>Places disponibles :</strong> {group.places}</p>
            </div>

            <h2>Membres du groupe</h2>
            {group.characters && group.characters.length > 0 ? (
                <ul className="group-members">
                    {group.characters.map((char) => (
                        <li key={char.id}>
                            <Link to={`/characters/${char.id}`}>
                                {char.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Ce groupe ne contient encore aucun membre.</p>
            )}
        </div>
    );
}

export default GroupDetail;
