import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { getCharacter } from "../api";

function CharacterDetail({ id, onBack }) {
    const [character, setCharacter] = useState(null); // remplit avec les données du personnage
    const [loading, setLoading] = useState(true);// marque si les données charges

    // on charge les données
    useEffect(() => {
        async function fetchCharacter() {
            setLoading(true);
            try {
                const data = await getCharacter(id);
                console.log("Character data:", data);
                setCharacter(data);
            } catch (error) {
                setCharacter(null);
            }
            setLoading(false);
        }
        fetchCharacter();
    }, [id]);

    if (loading) {
        return <p>Chargement du personnage...</p>;
    }
    if (!character) {
        return <p>Personnage introuvable.</p>;
    }

    // affichage détails du perso avec des vérifs
    return (
        <div className="character-detail">
            <button onClick={onBack} style={{ marginBottom: "1rem" }}>Retour</button>
            {character?.image && (
                <img src={character.image} alt={character.name} className="character-detail-image" />
            )}
            <div className="character-detail-info">
                {character.name && <h1>{character.name}</h1>}
                <div className="character-detail-core">
                    {character.class && <p><strong>Classe :</strong> {character.class.name}</p>}
                    {character.race && <p><strong>Race :</strong> {character.race.name}</p>}
                    {character.level && <p><strong>Niveau :</strong> {character.level}</p>}
                </div>

                {character.skills && character.skills.length > 0 && (
                    <div className="character-detail-skills">
                        <h2>Compétences</h2>
                        <ul>
                            {character.skills.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="character-detail-stats">
                    <h2>Statistiques</h2>
                    <div className="stats-container">
                        {Object.entries({
                            Force: character.strength,
                            Dextérité: character.dexterity,
                            Constitution: character.constitution,
                            Intelligence: character.intelligence,
                            Sagesse: character.wisdom,
                            Charisme: character.charisma,
                        }).map(([stat, value]) => (
                            <div key={stat} className="stat-item">
                                <label htmlFor={`${stat}-progress`}>{stat}: {value}</label>
                                <progress id={`${stat}-progress`} value={value} max={15} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;

