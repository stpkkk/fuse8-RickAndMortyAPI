import type { Character } from '../App';

type CharacterCardProps = {
  character: Character;
  className: string;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${day}.${month}.${year}`;
}

export function CharacterCard({ character, className }: CharacterCardProps) {
  const statusColor = character.status === 'Dead' ? '#820A0A' : '#267504';
  const formattedCreatedDate = formatDate(character.created);

  return (
    <div
      className={`${className} flex flex-col justify-between rounded-lg border-none pt-[20px] pr-[34px] pb-[21px] pl-[30px] shadow-[0_7px_25px_rgba(100,100,111,0.2)] transition-transform hover:scale-101`}
    >
      <h2>{character.name}</h2>
      <div className="flex w-full items-center justify-between font-[montserrat] text-[14px] text-[#767676]">
        <p>
          Status:{' '}
          <span style={{ color: statusColor, fontWeight: 'bold' }}>
            {character.status}
          </span>
        </p>
        <p>Created: {formattedCreatedDate}</p>
      </div>
    </div>
  );
}
