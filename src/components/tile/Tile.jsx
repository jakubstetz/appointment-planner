export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p name={'prop'} className="title-title">{name}</p>
      {Object.values(description).map((property, index) => (
        <p key={index} className="tile">{property}</p>
      ))}
    </div>
  );
};