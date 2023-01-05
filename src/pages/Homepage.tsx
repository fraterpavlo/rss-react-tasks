import React from 'react';
import carsData from '../data.json';
import SearchClass from 'components/searchClass';
import CreateCardForm from 'components/createCardForm';
import CardsList from 'components/cards-list';
import '../styles/pages/home-page.css';
import { ICarData } from 'interfaces/pages/homePage';
export class HomePage extends React.Component {
  state = {
    searchCurrentValue: localStorage.getItem('search-value') || '',
    currentCarsDataList: this.filterCarsDataList(localStorage.getItem('search-value') || ''),
  };

  filterCarsDataList(searchValue: string) {
    const trimValue = searchValue.trim().toLowerCase();
    let filteredCarsDataList;
    trimValue !== ''
      ? (filteredCarsDataList = carsData.filter((itemData) =>
          `${itemData.brand} ${itemData.model}`.toLowerCase().includes(trimValue)
        ))
      : (filteredCarsDataList = carsData);

    return filteredCarsDataList;
  }

  onSearchInput(value: string) {
    this.setState({ SearchCurrentValue: value });
    this.setState({ currentCarsDataList: this.filterCarsDataList(value) });
  }

  createCard(newCardData: ICarData) {
    this.setState({ currentCarsDataList: [newCardData, ...this.state.currentCarsDataList] });
  }

  render() {
    return (
      <div className="home-page__container" data-testid="home-page">
        <hr />
        <CreateCardForm create={this.createCard.bind(this)} />
        <hr />
        <SearchClass passingSearchStateToParent={this.onSearchInput.bind(this)} />
        <CardsList dataList={this.state.currentCarsDataList} />
      </div>
    );
  }
}
