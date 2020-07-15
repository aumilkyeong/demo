export async function fetchRegions() {
  const URL = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const URL = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const URL = 'https://eatgo-customer-api.ahastudio.com/restaurants'
  + `?region=${regionName}&category=${categoryId}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function fetchRestaurant({ restaurantId }) {
  const URL = `https://eatgo-customer-api.ahastudio.com/restaurants/${restaurantId}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
