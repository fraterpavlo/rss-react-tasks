import React from 'react';
import { CardsListProps } from 'interfaces/components/cardList';
import Card from './card';
import { Character } from 'rickmortyapi/dist/interfaces';
// import MyModal from './UI/myModal';
// import DetailedCard from './detailedCard';
import styles from 'styles/components/cardList.module.css';
import { Link } from 'react-router-dom';

function CardsList({ dataList, rootClasses }: CardsListProps) {
  const dataIsLoaded = dataList && dataList.length !== 0;
  // const [isVisibleCardModal, setIsVisibleCardModal] = useState(false);
  // const [currentModalData, setCurrentModalData] = useState<Character | null>(null);

  // function showDetailedCard(itemData: Character) {
  //   setIsVisibleCardModal(true);
  //   setCurrentModalData(itemData);
  // }

  const cardList = dataList.map((itemData: Character) => (
    <Link
      className={styles['cards-area__item']}
      key={itemData.id}
      to={`/fraterpavlo-REACT2022Q3/react-custom-app-state/${itemData.id}`}
    >
      <Card cardData={itemData} />
    </Link>
  ));
  return (
    <div className={`${rootClasses} ${styles['cards-area__container']}`}>
      {dataIsLoaded && cardList}
      {!dataIsLoaded && <strong>Sorry, data not found</strong>}
      {/* <MyModal visible={isVisibleCardModal} setVisible={setIsVisibleCardModal}>
        <DetailedCard cardData={currentModalData} />
      </MyModal> */}
    </div>
  );
}

export default CardsList;
