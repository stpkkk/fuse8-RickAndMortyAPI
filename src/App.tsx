import { useState, useEffect } from 'react';
import { CharacterGrid } from './components/CharacterGrid';
import { CharacterCard } from './components/CharacterCard';

export type Character = {
  id: number;
  url: string;
  image: string;
  name: string;
  species: string;
};

function App() {
  const [query, setQuery] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results || []))
      .catch((error) => console.error('Error fetching data:', error));
  }, [query]);

  return (
    <main className="mx-auto flex w-full max-w-[1596px] flex-col items-center justify-center pt-[128px]">
      <div className="flex w-full max-w-[626px] flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Search characters..."
          className="h-[64px] w-full rounded border"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="mt-[13px] self-start pl-[39px]">
          Found characters {characters.length}
        </span>
      </div>

      <div className="mt-[100px] flex w-full flex-col gap-4">
        <CharacterGrid
          characters={characters.slice(0, 2)}
          columns={2}
          renderItem={(character) => (
            <CharacterCard
              key={character.id}
              character={character}
              className="h-[262px] w-full max-w-[518px]"
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
              className="h-[150px] w-full max-w-[518px]"
            />
          )}
        />
      </div>
    </main>
  );
}

export default App;
