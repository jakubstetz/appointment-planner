import { Tile } from "../tile/Tile";

export const TileList = ({array}) => {
  return (
    <div>
      {array.map((element, index) => {
        const {name, ...description} = element;
        return <Tile name={name} description={description} key={index} /> /* LESSON LEARNED: Don't forget to *return* something in the .map() array method. */
      })}
    </div>
  );
};