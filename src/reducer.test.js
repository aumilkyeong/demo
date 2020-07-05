import reducer from './reducer';

import {
  setRegions,
  setCategories,
  selectRegion,
  selectCategory,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes Regions', () => {
      const initialState = {
        regions: [],
      };
      const regions = [
        { id: 1, name: '서울' },
      ];
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });
  describe('setCategories', () => {
    it('changes Categories', () => {
      const initialState = {
        categories: [],
      };
      const categories = [
        { id: 1, name: '한식' },
      ];
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });
  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };
      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });
  describe('selectRegion', () => {
    it('selects region and change display', () => {
      const initialState = {
        selectedRegion: null,
        regions: [
          { id: 1, name: '서울' },
        ],
      };
      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });
  describe('selectCategory', () => {
    it('selects category and change display', () => {
      const initialState = {
        selectedCategory: null,
        categories: [
          { id: 1, name: '한식' },
        ],
      };
      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });
});
