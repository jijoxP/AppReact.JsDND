import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getParties } from "../api";

function GroupList() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [onlyAvailable, setOnlyAvailable] = useState(false);

    useEffect(() => {
        async function fetchGroups() {
            try {
                const data = await getParties();
                setGroups(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchGroups();
    }, []);

    if (loading) return <p>Chargement des groupes...</p>;
    if (error) return <p>Erreur : {error}</p>;

    const displayedGroups = onlyAvailable 
        ? groups.filter(g => g.places > 0) 
        : groups;

    return (
        <div className="group-list">
            <h1>Liste des groupes</h1>
            
            <div className="filter-container" style={{ marginBottom: "1rem" }}>
                <label>
                    <input 
                        type="checkbox" 
                        checked={onlyAvailable} 
                        onChange={(e) => setOnlyAvailable(e.target.checked)} 
                    />
                    Afficher uniquement les groupes avec des places disponibles
                </label>
            </div>

            <div className="groups-container">
                {displayedGroups.length === 0 ? (
                    <p>Aucun groupe trouvé.</p>
                ) : (
                    displayedGroups.map((group) => (
                        <div key={group.id} className="group-card">
                            <h2>{group.name}</h2>
                            <p>Places disponibles : {group.places}</p>
                            <Link to={`/groups/${group.id}`}>Voir les détails</Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default GroupList;
