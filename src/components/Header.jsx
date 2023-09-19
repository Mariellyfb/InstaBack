import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState(""); // Almacenar la busqueda

  const handleDropdown = () => {
    console.log("HELLO"); //Para confirmar por consola que la informacion esta llegando
  };

  const handleSearch = () => {
    // insertar lógica para realizar la búsqueda con searchQuery (quizas se pueda hacer conectando con la funcion correspondiente del backend)
    console.log("Searching for:", searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    // Si se presiona Enter, realizar la búsqueda
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  /*<div
  className="search-container"
  src={`${process.env.VITE_API_URL}/search/${post.uploads}`}
  alt={posts.description}
  // INTENTO DE CONECTAR EL INPUT DE SEARCH CON LA FUNCION DEL BACKEND*/

  return (
    <header>
      <h1>InstaHack</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="arrow">
        <button onClick={handleDropdown}> 》</button>
      </div>
    </header>
  );
}
//Cambio de arrow por un boton para convertirlo en un desplegable con las opciones del menu.

export default Header;
