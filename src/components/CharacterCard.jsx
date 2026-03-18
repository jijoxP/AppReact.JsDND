function CharacterCard({ character, onSelect }) {
	const handleClick = () => {
		if (onSelect && character?.id) {
			onSelect(character.id);
		}
	};

	const stats = {
		strength: character.strength,
		dexterity: character.dexterity,
		constitution: character.constitution,
		intelligence: character.intelligence,
		wisdom: character.wisdom,
		charisma: character.charisma,
	};

	return (
		<div className="character-card" onClick={handleClick} style={{ cursor: "pointer" }}>
			{character?.image && (
				<img src={character.image} alt={character.name} className="character-card-image" />
			)}
			<h3 className="character-card-name">{character?.name}</h3>
			<p className="character-card-class">Classe : {character?.class?.name}</p>
			<p className="character-card-race">Race : {character?.race?.name}</p>
			<p className="character-card-level">Niveau : {character?.level}</p>
			{stats && (
				<div>
					<p><strong>Statistiques :</strong></p>
					{Object.entries(stats).map(([stat, value]) => (
						<div key={stat}>
							<label htmlFor={`${stat}-progress`}>{stat}: {value}</label>
							<progress id={`${stat}-progress`} value={value} max={20} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default CharacterCard;

