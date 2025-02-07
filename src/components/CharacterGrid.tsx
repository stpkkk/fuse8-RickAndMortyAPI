import { JSX } from 'react';
import { Character } from '../App';

export const CharacterGrid = ({
  characters,
  columns,
  renderItem,
}: {
  characters: Character[];
  columns: number;
  renderItem: (character: Character) => JSX.Element;
}) => {
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {characters.map(renderItem)}
    </div>
  );
};
