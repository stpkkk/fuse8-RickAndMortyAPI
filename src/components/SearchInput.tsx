import { type Dispatch, type SetStateAction, forwardRef } from 'react';
import type { Character } from '../App';

type SearchInputProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  characters: Character[];
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ query, setQuery, characters }, ref) => {
    return (
      <div className="flex w-full max-w-[626px] flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Search characters..."
          className="placeholder-purple shadow-primary h-[64px] w-full border-none pl-[25px] text-base font-bold focus:outline-none md:text-[22px]"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={ref}
        />
        <span className="font-secondary mt-[13px] self-start pl-[39px] leading-[20px]">
          {characters.length <= 0
            ? ''
            : `Found characters: ${characters.length}`}
        </span>
      </div>
    );
  },
);

SearchInput.displayName = 'SearchInput';
