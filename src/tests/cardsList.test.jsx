import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from 'components/cards-list';
import carsDataList from 'data';

describe('test cardsList', () => {
  it('test cardsList match snapshot', () => {
    const cardsList = render(<CardsList dataList={carsDataList} />);
    expect(cardsList).toMatchSnapshot();
  });

  it('test cardsList contain correct number of card', () => {
    render(<CardsList dataList={carsDataList} />);
    const cardsList = screen.getAllByAltText('car');
    expect(cardsList.length).toBe(carsDataList.length);
  });
});
