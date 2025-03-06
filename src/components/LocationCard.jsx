const LocationCard = ({ location }) => {
  return (
    <div className="card" key={location.id}>
      <h2>{location.name}</h2>
      <p>Tipo: {location.type}</p>
      <p>Dimensión: {location.dimension}</p>
      <p>Creado: {location.created}</p>
    </div>
  );
};

export default LocationCard;