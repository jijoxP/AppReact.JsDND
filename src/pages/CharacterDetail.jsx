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
                {character.name && <p><strong>Nom :</strong> {character.name}</p>}
                {character.class && <p><strong>Classe :</strong> {character.class}</p>}
                {character.race && <p><strong>race :</strong>{character.race}</p>}
                {character.skills.length > 0 && (
                    <div>
                        <p><strong>Compétences :</strong></p>
                        <ul>
                            {character.skills.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>}
        </div>
    );
}

export default CharacterDetail;

