import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import { Fade } from "react-awesome-reveal";
import logotipo from '../assets/logotipo.png'; 
import Pagination from '../components/Pagination'; 
import CharacterCard from '../components/CharacterCard';
import LocationCard from '../components/LocationCard';
import EpisodeCard from '../components/EpisodeCard';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import '../styles/home.css';

// Componente principal que maneja la visualización de personajes, ubicaciones o episodios
const Home = ({ type }) => {
  const [data, setData] = useState([]); // Estado para almacenar los datos de la API
  const [info, setInfo] = useState({}); // Estado para almacenar información de paginación
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener datos de la API
    const fetchData = async () => {
      setError(null); // Reiniciar el error antes de la nueva solicitud
      try {
        const response = await fetch(`${API_URL}/${type}/?page=${currentPage}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Manejo de errores HTTP
        }
        const result = await response.json();
        setData(result.results); // Almacenar los resultados en el estado
        setInfo(result.info); // Almacenar la información de paginación
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error al cargar los datos.'); // Establecer mensaje de error
        setData([]); // Limpiar datos en caso de error
        toast.error('Error al cargar los datos.'); // Mostrar notificación de error
      }
    };

    fetchData(); // Llamar a la función para obtener datos
  }, [currentPage, type]); // Dependencias del efecto

  // Función para avanzar a la siguiente página
  const handleNextPage = () => {
    if (info.next) {
      setCurrentPage(currentPage + 1); // Incrementar la página actual
    }
  };

  // Función para retroceder a la página anterior
  const handlePrevPage = () => {
    if (info.prev) {
      setCurrentPage(currentPage - 1); // Decrementar la página actual
    }
  };

  // Función para renderizar la tarjeta correspondiente según el tipo
  const renderCard = (item) => {
    switch (type) {
      case 'character':
        return (
          <Link to={`/character/${item.id}`} key={item.id}> 
            <CharacterCard character={item} />
          </Link>
        );
      case 'location':
        return <LocationCard location={item} key={item.id} />;
      case 'episode':
        return <EpisodeCard episode={item} key={item.id} />;
      default:
        return null; // Retornar null si el tipo no coincide
    }
  };

  // Filtrar los datos según el término de búsqueda
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      {error && toast.error(error)}
      <img src={logotipo} alt="Logotipo Rick and Morty" className='home-image' />
      <Fade delay={200} cascade damping={0.02} >
        <h1 className='home-title'>{type.charAt(0).toUpperCase() + type.slice(1) + "s"}</h1>
      </Fade>
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="search-bar" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} // Actualizar término de búsqueda
      />
      <div className="card-container">
        {filteredData.length > 0 ? (
            filteredData.map(renderCard) // Renderizar tarjetas filtradas
          ) : (
            <p>No hay resultados que coincidan.</p> // Mensaje si no hay resultados
          )}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={info.pages} 
        onNext={handleNextPage} 
        onPrev={handlePrevPage} 
      />
    </div>
  );
};

export default Home;