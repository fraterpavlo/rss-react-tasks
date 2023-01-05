import { Character } from 'rickmortyapi/dist/interfaces';
export interface ICardProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  cardData: Character;
  rootClasses?: string;
}
