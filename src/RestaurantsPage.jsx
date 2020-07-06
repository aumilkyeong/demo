import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from './actions';

import RegionsConatiner from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <RegionsConatiner />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
