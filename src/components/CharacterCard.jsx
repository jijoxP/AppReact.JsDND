import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
	// c'est pour éviter les erreurs si des données sont manquantes
	return (
		<Link to={`/characters/${character.id}`} className="character-card" style={{ textDecoration: 'none', color: 'inherit' }}>
			{character?.image && (
			<img src={`http://localhost:8000/uploads/images/characters/${character.image}`} alt={character.name} className="character-card-image" />
			)}
			<h3 className="character-card-name">{character?.name}</h3>
			<p className="character-card-class">Classe : {character?.class?.name}</p>
			<p className="character-card-race">Race : {character?.race?.name}</p>
			<p className="character-card-level">Niveau : {character?.level}</p>
		</Link>
	);
}

export default CharacterCard;

