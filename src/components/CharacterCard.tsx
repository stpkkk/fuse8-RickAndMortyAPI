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

function getStatusColor(status: string): string {
  switch (status) {
    case 'Dead':
      return '#820a0a';
    case 'Alive':
      return '#267504';
    default:
      return 'text-primary';
  }
}

export function CharacterCard({ character, className }: CharacterCardProps) {
  const statusColor = getStatusColor(character.status);
  const formattedCreatedDate = formatDate(character.created);

  return (
    <a
      className={`${className} shadow-primary flex flex-col justify-between rounded-lg border-none pt-[20px] pr-[34px] pb-[21px] pl-[30px] transition-transform hover:scale-103`}
      href={character.url}
    >
      <h2>{character.name}</h2>
      <div className="text-secondary font-secondary flex w-full items-center justify-between text-[14px]">
        <p>
          Status:{' '}
          <span style={{ color: statusColor, fontWeight: 'bold' }}>
            {character.status}
          </span>
        </p>
        <p>Created: {formattedCreatedDate}</p>
      </div>
    </a>
  );
}
