import React, { useEffect, useState } from "react";
import { getCharacters, getRaces, getClasses } from "../api";
import CharacterCard from "../components/CharacterCard";

function CharacterList({ onSelectCharacter }) {
	// Set tout 
	const [characters, setCharacters] = useState([]);
	const [races, setRaces] = useState([]);
	const [classes, setClasses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [filters, setFilters] = useState({ name: "", race: "", class: "" });
	const [sort, setSort] = useState({ by: "name", order: "asc" });

	// on charge les données au début
	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const [characterData, raceData, classData] = await Promise.all([
					getCharacters(),
					getRaces(),
					getClasses(),
				]);
				setCharacters(characterData);
				setRaces(raceData);
				setClasses(classData);
			} catch (err) {
				setError("Failed to load data. Please try again later.");
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	const handleFilterChange = (e) => {
		const { name, value } = e.target;
		setFilters((prev) => ({ ...prev, [name]: value }));
	};
	// tri par nom ou niveau
	const handleSortChange = (e) => {
		const { value } = e.target;
		setSort((prev) => ({
			...prev,
			by: value,
			order: prev.by === value ? (prev.order === "asc" ? "desc" : "asc") : "asc",
		}));
	};
	
	const filteredCharacters = characters
		.filter(
			(char) =>
				char.name.toLowerCase().includes(filters.name.toLowerCase()) &&
				(filters.race ? char.race.id === parseInt(filters.race) : true) &&
				(filters.class ? char.class.id === parseInt(filters.class) : true)
		)
		.sort((a, b) => {
			const aValue = sort.by === "level" ? a.level : a.name.toLowerCase();
			const bValue = sort.by === "level" ? b.level : b.name.toLowerCase();
			if (aValue < bValue) return sort.order === "asc" ? -1 : 1;
			if (aValue > bValue) return sort.order === "asc" ? 1 : -1;
			return 0;
		});

	if (loading) return <p>Chargement...</p>;
	if (error) return <p style={{ color: "red" }}>{error}</p>;

	return (
		<div>
			<div className="filters" style={{ marginBottom: "1rem" }}>
				<input
					type="text"
					name="name"
					placeholder="Filtrer par nom..."
					value={filters.name}
					onChange={handleFilterChange}
					style={{ marginRight: "1rem", padding: "0.5rem" }}
				/>
				<select
					name="race"
					value={filters.race}
					onChange={handleFilterChange}
					style={{ marginRight: "1rem", padding: "0.5rem" }}
				>
					<option value="">Toutes les races</option>
					{races.map((race) => (
						<option key={race.id} value={race.id}>
							{race.name}
						</option>
					))}
				</select>
				<select
					name="class"
					value={filters.class}
					onChange={handleFilterChange}
					style={{ padding: "0.5rem" }}
				>
					<option value="">Toutes les classes</option>
					{classes.map((c) => (
						<option key={c.id} value={c.id}>
							{c.name}
						</option>
					))}
				</select>
			</div>
			<div className="sorting" style={{ marginBottom: "1rem" }}>
				<label>Trier par :</label>
				<select
					onChange={handleSortChange}
					value={sort.by}
					style={{ marginLeft: "0.5rem", padding: "0.5rem" }}
				>
					<option value="name">Nom</option>
					<option value="level">Niveau</option>
				</select>
				<button
					onClick={() =>
						setSort((prev) => ({
							...prev,
							order: prev.order === "asc" ? "desc" : "asc",
						}))
					}
					style={{ marginLeft: "0.5rem", padding: "0.5rem" }}
				>
					{sort.order === "asc" ? "Croissant ↓" : "Décroissant ↑"}
				</button>
			</div>
			{filteredCharacters.length > 0 ? (
				<div className="character-list">
					{filteredCharacters.map((char) => (
						<CharacterCard
							key={char.id}
							character={char}
							onSelect={onSelectCharacter}
						/>
					))}
				</div>
			) : (
				<p>Aucun personnage ne correspond à votre recherche.</p>
			)}
		</div>
	);
}

export default CharacterList;
