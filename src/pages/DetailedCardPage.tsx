import React, { useContext } from 'react';
import { useParams } from 'react-router';
import Context from 'utils/contexts/homePageContext';
import styles from 'styles/components/detailedCard.module.css';
import { Link } from 'react-router-dom';

function DetailedCardPage() {
  const { id } = useParams();

  const { state } = useContext(Context)!;

  const cardData = state.cardsListState.data.results?.find((item) => item.id.toString() === id);

  if (!cardData) return <strong>data not found</strong>;

  return (
    <>
      <Link to="/fraterpavlo-REACT2022Q3/react-custom-app-state/">
        <button>Back</button>
      </Link>

      <hr />
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
    </>
  );
}

export default DetailedCardPage;
