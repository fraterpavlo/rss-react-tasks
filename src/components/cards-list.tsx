import React from 'react';
import { ICarData, CardsListProps } from 'interfaces/components/cardList';
import { Card } from './card';

function CardsList({ dataList }: CardsListProps) {
  const list = dataList.map((itemData: ICarData) => <Card key={itemData.id} cardData={itemData} />);
  return <div className="homepage__cards-area cards-area__container">{list}</div>;
}

export default CardsList;
