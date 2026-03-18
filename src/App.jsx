import React, { useState } from "react";
import CharacterList from "./pages/CharacterList";
import CharacterDetail from "./pages/CharacterDetail";
function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <h1>Mon application</h1>
      {selectedId === null ? (
        <CharacterList onSelectCharacter={setSelectedId} />
      ) : (
        <CharacterDetail id={selectedId} onBack={() => setSelectedId(null)} />
      )}
    </div>
  );
}

export default App;