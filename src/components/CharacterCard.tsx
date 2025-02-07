import { Character } from '../App';

type CharacterCardProps = {
  character: Character;
  className: string;
};

export const CharacterCard = ({ character, className }: CharacterCardProps) => (
  <a
    href={character.url}
    className={`${className}block rounded-lg border p-2 shadow-md`}
  >
    <h2 className="mt-2 text-xl font-bold">{character.name}</h2>
    <p>{character.species}</p>
  </a>
);
