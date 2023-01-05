import React from 'react';
import { ICardProps } from 'interfaces/components/card';
import styles from 'styles/components/card.module.css';

export function Card({ cardData, onClick, rootClasses = '' }: ICardProps) {
  return (
    <div
      data-testid="cardslist-item"
      data-card-id={cardData.id}
      className={`${styles.card} ${rootClasses}`}
      onClick={onClick}
    >
      <span className={styles['card__name']}>{cardData.name}</span>
      <div className={styles['card__img-contain']}>
        <img src={cardData.image} alt="card image" className={styles['card__img']} />
      </div>
    </div>
  );
}

export default Card;
