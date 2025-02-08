import { Dispatch, SetStateAction } from 'react';
import { Character } from '../App';

type SearchInputProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  characters: Character[];
};

export function SearchInput({ query, setQuery, characters }: SearchInputProps) {
  return (
    <div className="drop flex w-full max-w-[626px] flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Search characters..."
        className="h-[64px] w-full border-none pl-[25px] text-[22px] placeholder-[#656EC2] shadow-[0_7px_25px_rgba(100,100,111,0.2)] focus:outline-none"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="mt-[13px] self-start pl-[39px] font-[montserrat]">
        Found characters: {characters.length}
      </span>
    </div>
  );
}
