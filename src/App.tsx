import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { CharacterList } from './components/CharacterList';
import { SearchInput } from './components/SearchInput';

export type Character = {
  id: number;
  image: string;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  created: string;
};

function App() {
  const [query, setQuery] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${query}`,
        );
        const data = await response.json();
        setCharacters(data.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <main className="px-4 pt-10 pb-4 lg:pt-[128px]">
      <div className="mx-auto flex w-full max-w-[1596px] flex-col items-center justify-center">
        <SearchInput
          query={query}
          setQuery={setQuery}
          characters={characters}
        />
        {loading ? <Loader /> : <CharacterList characters={characters} />}
      </div>
    </main>
  );
}

export default App;
