const BASE_URL = "http://localhost:8000/api/v1";

export async function getRaces() {
	const response = await fetch(`${BASE_URL}/races`);
	if (!response.ok) {
		throw new Error('Failed to fetch races');
	}
	return response.json();
}

export async function getRace(id) {
	const response = await fetch(`${BASE_URL}/races/${id}`);
	if (!response.ok) {
		throw new Error("Failed to fetch race");
	}
	const data = await response.json();
	return data;
}

export async function getClasses() {
	const response = await fetch(`${BASE_URL}/classes`);
	if (!response.ok) {
		throw new Error('Failed to fetch classes');
	}
	return response.json();
}

export async function getClass(id) {
	const response = await fetch(`${BASE_URL}/classes/${id}`);
	if (!response.ok) {
		throw new Error("Failed to fetch class");
	}
	const data = await response.json();
	return data;
}

export async function getSkills() {
	const response = await fetch(`${BASE_URL}/skills`);
	if (!response.ok) {
		throw new Error("Failed to fetch skills");
	}
	return response.json();
}

export async function getCharacters() {
	const response = await fetch(`${BASE_URL}/characters`);
	if (!response.ok) {
		throw new Error('Failed to fetch characters');
	}
	return response.json();
}

export async function getCharacter(id) {
	const response = await fetch(`${BASE_URL}/characters/${id}`);
	if (!response.ok) {
		throw new Error("Failed to fetch character");
	}
	const data = await response.json();
	return data;
}

export async function getParties() {
	const response = await fetch(`${BASE_URL}/parties`);
	if (!response.ok) {
		throw new Error("Failed to fetch parties");
	}
	return response.json();
}	

export async function getParty(id) {
	const response = await fetch(`${BASE_URL}/parties/${id}`);
	if (!response.ok) {
		throw new Error("Failed to fetch party");
	}
	const data = await response.json();
	return data;
}






