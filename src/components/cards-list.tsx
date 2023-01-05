import React, { useState } from 'react';
import { CardsListProps } from 'interfaces/components/cardList';
import Card from './card';
import { Character } from 'rickmortyapi/dist/interfaces';
import MyModal from './UI/myModal';
import DetailedCard from './detailedCard';
import styles from 'styles/components/cardList.module.css';

function CardsList({ dataList, rootClasses }: CardsListProps) {
  const dataIsLoaded = dataList && dataList.length !== 0;
  const [isVisibleCardModal, setIsVisibleCardModal] = useState(false);
  const [currentModalData, setCurrentModalData] = useState<Character | null>(null);

  function showDetailedCard(itemData: Character) {
    setIsVisibleCardModal(true);
    setCurrentModalData(itemData);
  }

  const cardList = dataList.map((itemData: Character) => (
    <Card
      key={itemData.id}
      cardData={itemData}
      onClick={() => showDetailedCard(itemData)}
      rootClasses={styles['cards-area__item']}
    />
  ));
  return (
    <div className={`${rootClasses} ${styles['cards-area__container']}`}>
      {dataIsLoaded && cardList}
      {!dataIsLoaded && <strong>Sorry, data not found</strong>}
      <MyModal visible={isVisibleCardModal} setVisible={setIsVisibleCardModal}>
        <DetailedCard cardData={currentModalData} />
      </MyModal>
    </div>
  );
}

export default CardsList;
