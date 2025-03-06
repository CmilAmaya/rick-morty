import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import { Fade } from "react-awesome-reveal";
import logotipo from '../assets/logotipo.png'; 
import Pagination from '../components/Pagination'; 
import CharacterCard from '../components/CharacterCard';
import LocationCard from '../components/LocationCard';
import EpisodeCard from '../components/EpisodeCard';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({ type }) => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/${type}/?page=${currentPage}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.results);
        setInfo(result.info);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); 
      }
    };

    fetchData();
  }, [currentPage, type]);

  const handleNextPage = () => {
    if (info.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (info.prev) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        return null;
    }
  };

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <img src={logotipo} alt="Logotipo Rick and Morty" className='home-image' />
      <Fade delay={200} cascade damping={0.02} >
        <h1 className='home-title'>{type.charAt(0).toUpperCase() + type.slice(1) + "s"}</h1>
      </Fade>
      <input 
        type="text" 
        placeholder="Buscar..." 
        className="search-bar" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="card-container">
        {filteredData.length > 0 ? (
            filteredData.map(renderCard)
          ) : (
            <p>No hay resultados que coincidan.</p> 
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