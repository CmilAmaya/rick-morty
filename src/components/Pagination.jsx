import React from 'react'; 
import '../styles/pagination.css'; 

// Componente de paginación que recibe las propiedades: página actual, total de páginas, función para siguiente y anterior
const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="pagination"> 
      <button onClick={onPrev} disabled={currentPage === 1}> 
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span> 
      <button onClick={onNext} disabled={currentPage === totalPages}> 
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;