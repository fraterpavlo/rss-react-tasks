import React from 'react';
import { render } from '@testing-library/react';
// import CardsList from 'components/cards-list';
// import carsDataList from 'data';
import { Card } from 'components/card';

const testCarData = {
  id: 'test',
  brand: 'test',
  model: 'test',
  country: 'test',
  count: 'test',
  year: 9999,
  type: 'test',
  color: 'test',
  price: 999,
  electric: false,
};

describe('test card', () => {
  it('tets card match snapshot', () => {
    const card = render(<Card cardData={testCarData} />);
    expect(card).toMatchSnapshot();
  });
});
