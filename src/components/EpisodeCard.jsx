const EpisodeCard = ({ episode }) => {
  return (
    <div className="card" key={episode.id}>
      <h2>{episode.name}</h2>
      <p>Fecha de emisión: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
    </div>
  );
};

export default EpisodeCard;