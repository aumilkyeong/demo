import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

import {
  loadInitialData,
} from './actions';

import RegionsConatiner from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function RestaurantsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickRestaurant(restaurant) {
    const url = `/restaurants/${restaurant.id}`;
    history.push(url);
  }

  return (
    <div>
      <RegionsConatiner />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </div>
  );
}
