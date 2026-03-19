import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import CharacterDetail from "./pages/CharacterDetail";
import GroupList from "./pages/GroupList";
import GroupDetail from "./pages/GroupDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/groups" element={<GroupList />} />
          <Route path="/groups/:id" element={<GroupDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;