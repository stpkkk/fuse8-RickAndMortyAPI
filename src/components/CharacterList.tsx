import type { Character } from '../App';
import { CharacterCard } from './CharacterCard';
import { CharacterGrid } from './CharacterGrid';

type CharacterListProps = {
  characters: Character[];
};

export function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="mt-10 flex w-full flex-col gap-4 md:mt-[100px]">
      <CharacterGrid
        characters={characters.slice(0, 2)}
        columns={2}
        renderItem={(character) => (
          <CharacterCard
            key={character.id}
            character={character}
            className="h-[200px] w-full max-w-[788px] sm:h-[262px]"
          />
        )}
      />

      <CharacterGrid
        characters={characters.slice(2, 8)}
        columns={3}
        renderItem={(character) => (
          <CharacterCard
            key={character.id}
            character={character}
            className="h-[120px] w-full flex-0 sm:h-[150px] lg:max-w-[518px]"
          />
        )}
      />
    </div>
  );
}
