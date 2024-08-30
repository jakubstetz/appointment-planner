import { Tile } from "../tile/Tile";

export const TileList = ({array}) => {
  return (
    <div>
      {array.map((element, index) => {
        const {name, ...description} = element;
        <Tile name={name} description={description} key={index} />
      })}
    </div>
  );
};