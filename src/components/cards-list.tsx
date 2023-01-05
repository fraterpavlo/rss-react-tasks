import React from 'react';

import { ICarData, Card } from './card';

interface CardsListProps {
  dataList: ICarData[];
}

function CardsList({ dataList }: CardsListProps) {
  const list = dataList.map((itemData: ICarData) => <Card key={itemData.id} cardData={itemData} />);
  return <div className="homepage__cards-area cards-area__container">{list}</div>;
}

export default CardsList;
