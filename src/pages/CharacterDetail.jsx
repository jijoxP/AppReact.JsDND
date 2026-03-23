import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { getCharacter, getClass } from "../api";

function CharacterDetail() {
    const [character, setCharacter] = useState(null);// on recupère les détails du person
    const [characterClass, setCharacterClass] = useState(null);// on stocke les détails de la classe pour afficher les compétences
    const [loading, setLoading] = useState(true);
    const { id } = useParams();// on récupère l'id du personnage depuis l'URL
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCharacter() { //on récupère les détails du personnage et de sa classe
            if (!id) return;
            setLoading(true);
            try {
                const data = await getCharacter(id);
                console.log("Character data:", data);
                setCharacter(data);
                // si data.class et data.class.id existent,récup les détails de la classe 
                if (data.class && data.class.id) {
                    const classData = await getClass(data.class.id);
                    setCharacterClass(classData);
                }
            } catch (error) {
                console.error(error);
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
            <div className="character-detail-info">
                {character.name && <h1>{character.name}</h1>}
                {character?.image && (
                <img src={`http://localhost:8000/uploads/images/characters/${character.image}`} alt={character.name} className="character-card-image" />
            )}
                <div className="character-detail-core">
                    {character.class && <p><strong>Classe :</strong> {character.class.name}</p>}
                    {character.race && <p><strong>Race :</strong> {character.race.name}</p>}
                    {character.level && <p><strong>Niveau :</strong> {character.level}</p>}
                    <button onClick={() => navigate(-1)} className="btn btn-secondary" style={{ marginLeft: "auto", marginBottom: 0 }}>Retour</button>
                </div>
                {characterClass?.skills?.length > 0 && (
                    <div className="character-detail-skills">
                        <h2>Compétences</h2>
                        <ul>
                            {characterClass.skills.map((skill, index) => (
                                <li key={skill.id || index}>{skill.name || skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {(character?.parties?.length > 0 || character?.groups?.length > 0 || character?.party || character?.group) && (
                    <div className="character-detail-groups">
                        <h2>Groupes</h2>
                        <ul>
                            {(character.parties || character.groups || [character.party || character.group].filter(Boolean)).map((group, index) => (
                                <li key={group.id || index}>
                                    <Link to={`/groups/${group.id}`}>
                                        {group.name || `Groupe ${group.id}`}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="character-detail-stats">
                    <h2>Statistiques </h2>
                    
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

