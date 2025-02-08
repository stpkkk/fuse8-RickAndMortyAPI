import type { Character } from '../App';

type CharacterCardProps = {
  character: Character;
  className: string;
};

export function CharacterCard({ character, className }: CharacterCardProps) {
  return (
    <a
      href={character.url}
      className={`${className} block rounded-lg border-none p-2 shadow-[0_7px_25px_rgba(100,100,111,0.2)] transition-transform hover:scale-101`}
    >
      <h2 className="mt-2 truncate text-base font-bold sm:text-lg lg:text-xl">
        {character.name}
      </h2>
      <p className="truncate text-sm sm:text-base">{character.species}</p>
    </a>
  );
}
