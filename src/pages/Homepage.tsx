import React from 'react';
import SearchClass from 'components/searchClass';
import carsData from '../data.json';
import CardsList from 'components/cards-list';
import '../styles/home-page.css';

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

  render() {
    return (
      <div className="home-page__container" data-testid="home-page">
        <h1>HomePage</h1>
        <SearchClass passingSearchStateToParent={this.onSearchInput.bind(this)} />
        <CardsList dataList={this.state.currentCarsDataList} />
      </div>
    );
  }
}
