import React from 'react';
import { IDetailedCardProps } from '../interfaces/components/detailedCard';
import styles from 'styles/components/detailedCard.module.css';

function DetailedCard({ cardData }: IDetailedCardProps) {
  if (!cardData) return <strong>sorry, data not found</strong>;

  return (
    <div data-testid={cardData.id} data-card-id={cardData.id} className={styles.card}>
      <span className={styles['card__name']}>{cardData.name}</span>
      <div className={styles['card__img-contain']}>
        <img src={cardData.image} alt="card image" className={styles['card__img']} />
      </div>
      <div className="card__gender">
        gender:
        <span className="card__gender_output"> {cardData.gender}</span>
      </div>
      <div className="card__species">
        species:
        <span className="card__species_output"> {cardData.species}</span>
      </div>
      <div className="card__status">
        status:
        <span className="card__status_output"> {cardData.status}</span>
      </div>
      <div className="card__origin">
        origin:
        <span className="card__origin_output"> {cardData.origin.name}</span>
      </div>
      <div className="card__location">
        location:
        <span className="card__location_output"> {cardData.location.name}</span>
      </div>
      <div className="card__created">
        created:
        <span className="card__created_output">
          {` ${new Date(cardData.created).getDay()}-
          ${new Date(cardData.created).getMonth()}-
          ${new Date(cardData.created).getFullYear()}`}
        </span>
      </div>
    </div>
  );
}

export default DetailedCard;
