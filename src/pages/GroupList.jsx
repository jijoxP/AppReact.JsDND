import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // lien pour les personnages dans les groupes
import { getParties } from "../api";

function GroupList() {
    const [groups, setGroups] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);// pour afficher que les groupes avec des places dispo
    const [onlyAvailable, setOnlyAvailable] = useState(false);// pour afficher que les groupes avec des places dispo

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
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <input 
                        type="checkbox" 
                        checked={onlyAvailable} 
                        onChange={(e) => setOnlyAvailable(e.target.checked)} 
                        style={{ width: "auto", margin: 0 }}
                    />
                    Afficher uniquement les groupes avec des places disponibles
                </label>
            </div>

            <div className="character-list">
                {displayedGroups.length === 0 ? (
                    <p>Aucun groupe trouvé.</p>
                ) : (
                    displayedGroups.map((group) => (
                        <Link to={`/groups/${group.id}`} key={group.id} className="character-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3 className="character-card-name">{group.name}</h3>
                            <p className="character-card-level">Places disponibles : {group.places}</p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}

export default GroupList;
