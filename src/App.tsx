import { useState, useEffect, useRef } from 'react';
import { Loader } from './components/Loader';
import { CharacterList } from './components/CharacterList';
import { SearchInput } from './components/SearchInput';

export type Character = {
  id: number;
  image: string;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  created: string;
  url: string;
};

function App() {
  const [query, setQuery] = useState<string>('');
  const [tempQuery, setTempQuery] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  //debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setQuery(tempQuery);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [tempQuery]);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim().length < 3) {
        setCharacters([]);
        return;
      }

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
    <main className="px-4 pt-10 pb-4 lg:py-[128px]">
      <div className="mx-auto flex w-full max-w-[1596px] flex-col items-center justify-center">
        <SearchInput
          query={tempQuery}
          setQuery={setTempQuery}
          characters={characters}
          ref={searchInputRef}
        />
        {loading ? (
          <Loader />
        ) : query.trim() === '' ? (
          <p className="text-secondary mt-4">
            Enter name of the character for search
          </p>
        ) : query.trim().length < 3 ? (
          <p className="text-secondary mt-4">Enter more than 3 characters</p>
        ) : characters.length === 0 ? (
          <p className="text-secondary mt-4">Nothing found</p>
        ) : (
          <CharacterList characters={characters} />
        )}
      </div>
    </main>
  );
}

export default App;
