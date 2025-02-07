import { useState, useEffect } from 'react';

type Character = {
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
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <input
        type="text"
        placeholder="Search character..."
        className="rounded border p-2"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {characters.map((character) => (
          <a
            key={character.id}
            href={character.url}
            className="block rounded border p-4 hover:shadow-lg"
          >
            <img
              src={character.image}
              alt={character.name}
              className="h-48 w-full rounded object-cover"
            />
            <h2 className="mt-2 text-xl font-bold">{character.name}</h2>
            <p>{character.species}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
