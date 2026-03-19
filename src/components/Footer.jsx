import React from "react";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} D&D Manager - Application React. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
