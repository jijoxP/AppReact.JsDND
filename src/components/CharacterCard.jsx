
function CharacterCard({ character, onSelect }) {
	const handleClick = () => {
		if (onSelect && character?.id) {
			onSelect(character.id);
		}
	};

	return (
		<div className="character-card" onClick={handleClick} style={{ cursor: "pointer" }}>
			{character?.image && (
				<img src={character.image} alt={character.name} className="character-card-image" />
			)}
			<h3 className="character-card-name">{character?.name}</h3>
			<p className="character-card-class">Classe : {character?.class}</p>
			<p className="character-card-race">Race : {character?.race}</p>
			<p className="character-card-level">Niveau : {character?.level}</p>
		</div>
	);
}

export default CharacterCard;

