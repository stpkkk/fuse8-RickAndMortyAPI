import type { JSX } from 'react';
import type { Character } from '../App';

type CharacterGridProps = {
  characters: Character[];
  columns: 2 | 3;
  renderItem: (character: Character) => JSX.Element;
};

export function CharacterGrid({
  characters,
  columns,
  renderItem,
}: CharacterGridProps) {
  return (
    <div
      className={`grid gap-4 ${columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
    >
      {characters.map(renderItem)}
    </div>
  );
}
