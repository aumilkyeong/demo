export async function fetchCategories() {
  // TODO: fetch GET /categories
  // REST - CRUD => Read - collection / member, element
  const URL = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

// TODO: delete this!! - it just dummy to avoid lint error
export function xxx() {

}
