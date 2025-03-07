import React from 'react'; 
import '../styles/pagination.css'; 

// Componente de paginación que recibe las propiedades: página actual, total de páginas, función para siguiente y anterior
const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="pagination"> // Contenedor principal de la paginación
      <button onClick={onPrev} disabled={currentPage === 1}> // Botón para ir a la página anterior
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span> // Muestra la página actual y el total de páginas
      <button onClick={onNext} disabled={currentPage === totalPages}> // Botón para ir a la siguiente página
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;