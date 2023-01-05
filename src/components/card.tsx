import React from 'react';

export interface ICarData {
  id: string;
  brand: string;
  model: string;
  country: string;
  count: string;
  year: number;
  type: string;
  color: string;
  price: number;
  electric: boolean;
}

interface CardProps {
  cardData: ICarData;
}

export function Card({ cardData }: CardProps) {
  const isElectricItemStr: string = cardData.electric ? 'Да' : 'Нет';

  return (
    <div data-id={cardData.id} className="cards-area__item card">
      <span className="card__title">
        {cardData.brand} {cardData.model}
      </span>
      <div className="card__img-contain">
        <img src={`./assets/img/cars/${cardData.id}.jpg`} alt="car" className="card__img" />
      </div>
      <div className="card__type">
        Тип кузова:
        <span className="card__type-output">{cardData.type}</span>
      </div>
      <div className="card__country">
        Страна сборки:
        <span className="card__country-output">{cardData.country}</span>
      </div>
      <div className="card__year">
        Год производства:
        <span className="card__year-output">{cardData.year}</span>
      </div>
      <div className="card__price">
        Цена от:
        <span className="card__price-output">{cardData.price} &#128176;</span>
      </div>
      <div className="card__electric">
        Электрокар:
        <span className="card__electric-output">{isElectricItemStr}</span>
      </div>
    </div>
  );
}

// export default Card;
