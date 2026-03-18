import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { getCharacter } from "../api";

function CharacterDetail({ id, onBack }) {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <div>
            <button onClick={onBack} style={{ marginBottom: "1rem" }}>Retour</button>
            <CharacterCard character={character} onSelect={() => {}} />
            {<div style={{ marginTop: "1rem" }}>
                {character?.image && (
				<img src={character.image} alt={character.name} className="character-card-image" />
			)}
                {character.name && <p><strong>Nom :</strong> {character.name}</p>}
                {character.class && <p><strong>Classe :</strong> {character.class.name}</p>}
                {character.race && <p><strong>race :</strong>{character.race.name}</p>}
                {character.skills && character.skills.length > 0 && (
                    <div>
                        <p><strong>Compétences :</strong></p>
                        <ul>
                            {character.skills.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {character.stats && (
                    <div>
                        <p><strong>Statistiques :</strong></p>
                        {Object.entries(character.stats).map(([stat, value]) => (
                            <div key={stat}>
                                <label htmlFor={`${stat}-progress`}>{stat}: {value}</label>
                                <progress id={`${stat}-progress`} value={value} max={15} />
                            </div>
                        ))}
                    </div>
                )}
            </div>}
        </div>
    );
}

export default CharacterDetail;

