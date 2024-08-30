export const TileList = (array) => {
  return (
    <div>
      {array.map((element, index) => <Tile name={element.name} description={element.email} key={index.toString()} />)}
    </div>
  );
};